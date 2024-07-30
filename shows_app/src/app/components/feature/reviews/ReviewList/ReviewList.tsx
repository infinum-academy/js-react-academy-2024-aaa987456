import React from "react";
import { Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { IReview } from "../../../../typings/reviews";
import { IShows } from "@/app/typings/shows";

interface IReviewListProps {
  reviews: Array<IReview>;
  show: IShows;
}
export const ReviewList = ({ reviews, show }: IReviewListProps) => {
  if (!Array.isArray(reviews.reviews)) {
    console.error("Reviews is not an array");
    return null;
  }

  return (
    <Flex direction="column" overflow="hidden">
      {reviews.reviews.map((review: IReview) => (
        <ReviewItem key={review.id} review={review} show={show} />
      ))}
    </Flex>
  );
};
