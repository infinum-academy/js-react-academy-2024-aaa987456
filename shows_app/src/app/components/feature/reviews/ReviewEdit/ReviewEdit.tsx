import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Flex,
  Icon,
  useDisclosure
} from "@chakra-ui/react";

import { updateReviewM } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { mutate } from "swr";
import { IReviewItemProps } from "../ReviewItem/ReviewItem";
import useSWRMutation from "swr/mutation";
import { StarRating } from "../StarRating/StarRating";

export const ReviewEdit = ({ review, show }: IReviewItemProps) => {
  const { trigger: updateReviewTrigger } = useSWRMutation(
    swrKeys.update(review.id),
    updateReviewM
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [comment, setComment] = useState(review.comment);
  const [rating, setRating] = useState(review.rating);

  const handleUpdate = async () => {
    if (!comment) {
      return;
    }
    try {
      await updateReviewTrigger({
        reviewId: review.id,
        comment,
        rating
      });
      mutate(swrKeys.getReviews(show.id));
      onClose();
    } catch (error) {
      console.error("Failed to update review:", error);
    }
  };

  const handleReviewChange = (rating: number) => {
    setRating(rating);
  };

  return (
    <>
      <Button
        bg="white"
        borderRadius="50px"
        maxW="100px"
        mt="4"
        onClick={onOpen}
        fontSize="button"
      >
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap={4}>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Edit comment"
              />
              <Flex>
                <StarRating rating={rating} onChange={handleReviewChange} />
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor="brand.300"
              marginLeft={3}
              onClick={handleUpdate}
              color="white"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
