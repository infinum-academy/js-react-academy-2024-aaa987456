import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../reviews/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReview, IReviewContent } from "@/app/typings/reviews";

export interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  onAddReview: (review: IReviewContent) => void;
  onDeleteReview: (review: IReview) => void;
}

export const ShowReviewSection = ({
  reviews,
  onAddReview,
  onDeleteReview,
}: IShowReviewSectionProps) => {
  return (
    <Box width="100%">
      <ReviewForm addShowReview={onAddReview} />
      <ReviewList reviews={reviews} onDeleteReview={onDeleteReview} />
    </Box>
  );
};
