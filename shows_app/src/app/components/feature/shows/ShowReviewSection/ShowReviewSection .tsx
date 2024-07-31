import React from "react";
import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../reviews/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReview, IReviewContent } from "@/app/typings/reviews";

export interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  showId: string;
}

export const ShowReviewSection = ({
  reviews,
  showId
}: IShowReviewSectionProps) => {
  console.log("Reviews in ShowReviewSection:", reviews);
  return (
    <Box width="100%">
      <ReviewForm showId={showId} />
      <ReviewList reviews={reviews} />
    </Box>
  );
};
