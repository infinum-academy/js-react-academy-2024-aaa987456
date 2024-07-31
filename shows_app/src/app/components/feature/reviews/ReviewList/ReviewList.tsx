import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { IReview } from "../../../../typings/reviews";

interface IReviewListProps {
  reviews: Array<IReview>;
}
export const ReviewList = ({ reviews }: IReviewListProps) => {
  if (!Array.isArray(reviews.reviews)) {
    console.error("Reviews is not an array");
    return null;
  }

  return (
    <Flex direction="column" overflow="hidden">
      {reviews.reviews.map((review: IReview) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </Flex>
  );
};
