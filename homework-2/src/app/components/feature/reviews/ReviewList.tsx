import React from "react";
import { Box } from "@chakra-ui/react";
import { IReviewItemProps, ReviewItem } from "./ReviewItem";
import { IReview } from "../shows/ShowReviewSection ";

interface IReviewListProps {
  reviews: {
    email: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
  onDeleteTeReview: (review: IReview) => void;
}

export const ReviewList = ({ reviews, onDeleteTeReview }: IReviewListProps) => {
  return (
    <Box>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} onDelete={onDeleteTeReview} />
      ))}
    </Box>
  );
};
