import React from "react";
import {
  Box,
  Flex,
  Text,
  Card,
  CardBody,
  Button,
  Icon
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { IReview } from "../../../../typings/reviews";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { deleteReviewM, mutator } from "@/fetchers/mutators";
import { mutate } from "swr";

export interface IReviewItemProps {
  review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
  const { trigger: deleteReviewTrigger } = useSWRMutation(
    swrKeys.delete(review.id),
    deleteReviewM
  );

  const handleDelete = async () => {
    try {
      await deleteReviewTrigger({
        reviewId: review.id,
        userId: review.user.id
      });
      mutate(swrKeys.getReviews);
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  return (
    <Card backgroundColor="#5918B0" paddingBottom="8" marginBottom="4">
      <CardBody>
        <Flex alignItems="center" gap={2}>
          <Box>
            <Text fontWeight="bold">{review.email}</Text>
            <Text>{review.comment}</Text>
            <Text> {review.rating}/5</Text>
            <Flex ml="2">
              {Array(review.rating)
                .fill("")
                .map((curentStar, index) => (
                  <Icon key={index} as={StarIcon} color="yellow.400" />
                ))}
            </Flex>
            <Button
              bg="white"
              borderRadius="50px"
              maxW="100px"
              onClick={handleDelete}
            >
              Remove
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
