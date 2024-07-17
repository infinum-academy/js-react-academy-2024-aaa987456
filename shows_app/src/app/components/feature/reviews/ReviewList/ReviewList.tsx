import React from "react";
import { Box } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { IReview } from "@/app/typings/reviews";

interface IReviewListProps {
  reviews: Array<IReview>;
  onDeleteReview: (review: IReview) => void;
}

export const ReviewList = ({ reviews, onDeleteReview }: IReviewListProps) => {
  return (
    <Box>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} onDelete={onDeleteReview} />
      ))}
    </Box>
  );
};
