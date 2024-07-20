"use client";

import React, { useEffect, useState } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection ";
import { IShows } from "../../../../typings/shows";
import { IReview, IReviewContent } from "../../../../typings/reviews";
import { fetcher } from "@/fetchers/fetchers";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR from "swr";
import { useParams } from "next/navigation";

const saveToLocalStorage = (showId: string, reviews: Array<IReview>) => {
  const allReviews = JSON.parse(localStorage.getItem("reviews") || "{}");
  allReviews[showId] = reviews;
  localStorage.setItem("reviews", JSON.stringify(allReviews));
};

const loadFromLocalStorage = (showId: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const allReviews = JSON.parse(localStorage.getItem("reviews") || "{}");
    return allReviews[showId] || [];
  }
  return [];
};

const calculateNewAverageRating = (
  initialAverageRating: number,
  initialReviewCount: number,
  reviews: Array<IReview>
) => {
  const totalInitialRating = initialAverageRating * initialReviewCount;
  const totalNewRating = reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  const totalReviews = initialReviewCount + reviews.length;

  if (totalReviews === 0) return 0;

  return (totalInitialRating + totalNewRating) / totalReviews;
};
export const ShowsComponent = () => {
  const params = useParams();
  const id = params?.id as string;

  const [reviews, setReviews] = useState<Array<IReview>>(
    loadFromLocalStorage(id)
  );

  useEffect(() => {
    saveToLocalStorage(id, reviews);
  }, [reviews, id]);

  const { data, error, isLoading } = useSWR<{ show: IShows }>(
    id ? swrKeys.selected(id) : null,
    fetcher
  );

  if (error) {
    return (
      <Box>
        <Text>Failed to load shows</Text>
      </Box>
    );
  }

  if (isLoading || !data) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  const handleAddReview = (review: IReviewContent) => {
    if (!review.rating || !review.comment) {
      return;
    }
    const newReview: IReview = {
      email: "",
      avatar: "https://via.placeholder.com/150",
      ...review,
      show_id: id
    };
    setReviews([...reviews, newReview]);
  };

  const handleDeleteReview = (reviewToRemove: IReview) => {
    const updatedReviews = reviews.filter(
      (review) => review !== reviewToRemove
    );
    setReviews(updatedReviews);
  };

  const averageRating = calculateNewAverageRating(
    data.show.average_rating,
    data.show.no_of_reviews,
    reviews
  );

  return (
    <Flex direction="column">
      <ShowDetails show={data.show} averageRating={averageRating} />
      <ShowReviewSection
        reviews={reviews}
        onAddReview={handleAddReview}
        onDeleteReview={handleDeleteReview}
      />
    </Flex>
  );
};
