"use client";

import React from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection ";
import { IShows } from "../../../../typings/shows";
import { IReview, IReviewContent } from "../../../../typings/reviews";
import { fetcher } from "@/fetchers/fetchers";
import { swrKeys } from "@/fetchers/swrKeys";
import { getReviews } from "@/fetchers/shows";
import { createReviewM, deleteReviewM } from "@/fetchers/mutators";
import { useParams } from "next/navigation";

const calculateNewAverageRating = (
  initialAverageRating: number,
  initialReviewCount: number,
  reviews: Array<IReview>
): number => {
  const totalInitialRating = initialAverageRating * initialReviewCount;
  const totalNewRating = reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  const totalReviews = initialReviewCount + reviews.length;

  if (totalReviews === 0) return 0;

  const newAverageRating = (totalInitialRating + totalNewRating) / totalReviews;
  return newAverageRating;
};

export const ShowsComponent = () => {
  const params = useParams();
  const id = params?.id as string;

  const { data, error, isLoading } = useSWR<{ show: IShows }>(
    id ? swrKeys.selected(id) : null,
    fetcher
  );

  const {
    data: reviewsData,
    error: reviewsError,
    isLoading: reviewsIsLoading,
    mutate: mutateReviews
  } = useSWR<IReview[]>(id ? swrKeys.getReviews(id) : null, () =>
    getReviews(id)
  );

  const { trigger: createReviewTrigger } = useSWRMutation(
    swrKeys.create,
    createReviewM
  );

  const { trigger: deleteReviewTrigger } = useSWRMutation(
    swrKeys.delete(id),
    deleteReviewM
  );

  const handleAddReview = async (review: IReview) => {
    if (!review.rating || !review.comment) {
      return;
    }
    const newReview: IReview = {
      ...review,
      show_id: id,
      id: "",
      email: "",
      user: { id: "", email: "", image_url: "" }
    };
    try {
      await createReviewTrigger(newReview);

      await mutateReviews();
    } catch (error) {
      console.error("Failed to add review:", error);
    }
  };

  const handleDeleteReview = async (reviewId: string, userId: string) => {
    console.log(userId);
    console.log(reviewId);
    try {
      await deleteReviewTrigger({ reviewId, userId });
      await mutateReviews();
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  if (error) {
    return (
      <Box>
        <Text>Failed to load data</Text>
      </Box>
    );
  }

  if (isLoading || reviewsIsLoading || !data) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  const averageRating = Array.isArray(reviewsData)
    ? calculateNewAverageRating(
        data.show.average_rating,
        data.show.no_of_reviews,
        reviewsData
      )
    : data.show.average_rating;

  console.log(averageRating);

  return (
    <Flex direction="column">
      <ShowDetails show={data.show} averageRating={averageRating} />
      <ShowReviewSection
        reviews={reviewsData || []}
        onAddReview={handleAddReview}
        onDeleteReview={handleDeleteReview}
      />
    </Flex>
  );
};
