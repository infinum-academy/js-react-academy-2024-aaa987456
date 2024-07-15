"use client";

import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection ";
import { IShows } from "../../../../typings/shows";
import { IReview, IReviewContent } from "../../../../typings/reviews";

export interface IShowsComponentProps {
  show: IShows;
}

const saveToLocalStorage = (showId: string, reviews: Array<IReview>) => {
  const allReviews = JSON.parse(localStorage.getItem("reviews") || "{}");
  allReviews[showId] = reviews;
  localStorage.setItem("reviews", JSON.stringify(allReviews));
};

const loadFromLocalStorage = (showId: string) => {
  const allReviews = JSON.parse(localStorage.getItem("reviews") || "{}");
  return allReviews[showId] || [];
};

const calculateAverageRating = (reviews: Array<IReview>) => {
  if (reviews.length === 0) return 0;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const showsAverageRating = totalRating / reviews.length;
  return showsAverageRating;
};

export const ShowsComponent = ({ show }: IShowsComponentProps) => {
  const [reviews, setReviews] = useState<Array<IReview>>(
    loadFromLocalStorage(show.id)
  );

  useEffect(() => {
    saveToLocalStorage(show.id, reviews);
  }, [reviews, show.id]);

  const handleAddReview = (review: IReviewContent) => {
    if (!review.rating || !review.comment) {
      return;
    }
    const newReview: IReview = {
      email: "",
      avatar: "https://via.placeholder.com/150",
      ...review,
      id_of_show: show.id
    };
    setReviews([...reviews, newReview]);
  };

  const handleDeleteReview = (reviewToRemove: IReview) => {
    const updatedReviews = reviews.filter(
      (review) => review !== reviewToRemove
    );
    setReviews(updatedReviews);
  };

  const averageRating = calculateAverageRating(reviews);

  return (
    <Flex direction="column">
      <ShowDetails show={show} averageRating={averageRating} />
      <ShowReviewSection
        reviews={reviews}
        onAddReview={handleAddReview}
        onDeleteReview={handleDeleteReview}
      />
    </Flex>
  );
};
