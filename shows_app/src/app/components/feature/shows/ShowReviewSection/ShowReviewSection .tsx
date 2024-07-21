import React from "react";
import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../reviews/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReview, IReviewContent } from "@/app/typings/reviews";

export interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  onAddReview: (review: IReview) => void;
  onDeleteReview: (reviewId: string, userId: string) => void;
}

export const ShowReviewSection = ({
  reviews,
  onAddReview,
  onDeleteReview
}: IShowReviewSectionProps) => {
  console.log("Reviews in ShowReviewSection:", reviews);
  return (
    <Box width="100%">
      <ReviewForm addShowReview={onAddReview} />
      <ReviewList reviews={reviews} onDeleteReview={onDeleteReview} />
    </Box>
  );
};
