import React from "react";
import { Box } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { IReview } from "../../../../typings/reviews";

interface IReviewListProps {
  reviews: Array<IReview>;
  onDeleteReview: (reviewId: string, userId: string) => void;
}

export const ReviewList = ({ reviews, onDeleteReview }: IReviewListProps) => {
  if (!Array.isArray(reviews.reviews)) {
    console.error("Reviews is not an array");
    return null;
  }

  if (!onDeleteReview || typeof onDeleteReview !== "function") {
    console.error("onDeleteReview is not a function");
    return null;
  }

  return (
    <Box>
      {reviews.reviews.map((review: IReview) => (
        <ReviewItem key={review.id} review={review} onDelete={onDeleteReview} />
      ))}
    </Box>
  );
};
