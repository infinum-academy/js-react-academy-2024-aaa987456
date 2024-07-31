import React from "react";
import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../reviews/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReview, IUser } from "@/app/typings/reviews";
import { IShows } from "@/app/typings/shows";

export interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  showId: string;
  show: IShows;
}

export const ShowReviewSection = ({
  reviews,
  showId,
  show
}: IShowReviewSectionProps) => {
  return (
    <Box>
      <ReviewForm showId={showId} />
      <ReviewList reviews={reviews} show={show} />
    </Box>
  );
};
