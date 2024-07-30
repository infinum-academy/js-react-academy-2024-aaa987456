import React from "react";
import { Box, Flex, Text, Img, Button, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { IReview } from "../../../../typings/reviews";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { deleteReviewM } from "@/fetchers/mutators";
import { mutate } from "swr";
import { IShows } from "@/app/typings/shows";

export interface IReviewItemProps {
  review: IReview;
  show: IShows;
}

export const ReviewItem = ({ review, show }: IReviewItemProps) => {
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
      mutate(swrKeys.getReviews(show.id));
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  return (
    <Box
      backgroundColor="brand.200"
      padding="4"
      marginBottom="4"
      borderRadius="15px"
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      gap={4}
    >
      <Flex direction="row" align="flex-start" gap={4}>
        <Img
          src={review.user.image_url || "https://via.placeholder.com/35"}
          boxSize="35px"
          objectFit="cover"
          borderRadius="full"
          alt="User image"
        />
        <Flex direction="column" gap={2} flex="1">
          <Text color="white" fontSize="smallCaptionRegular" fontWeight="bold">
            {review.user.email}
          </Text>
          <Flex direction="column" gap={1}>
            <Text color="white">Rating: {review.rating}/5</Text>
            <Flex>
              {Array(review.rating)
                .fill("")
                .map((_, index) => (
                  <Icon key={index} as={StarIcon} color="white" />
                ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" flex="1">
        <Text color="white" fontSize="smallCaptionRegular">
          {review.comment}
        </Text>
      </Flex>
      <Button
        bg="white"
        borderRadius="50px"
        maxW="100px"
        mt="4"
        onClick={handleDelete}
        fontSize="button"
      >
        Remove
      </Button>
    </Box>
  );
};
