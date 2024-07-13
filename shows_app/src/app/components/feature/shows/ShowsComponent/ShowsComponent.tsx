"use client";

import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { ShowsDetails } from "../ShowsDetails/ShowsDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection ";
import { IShows } from "../../../../typings/shows";
import { IReview, IReviewContent } from "../../../../typings/reviews";

export interface IShowsComponentProps {
  show: IShows;
}

const saveToLocalStorage = (reviews: Array<IReview>) => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
};

const loadFromLocalStorage = () => {
  const reviewsString = localStorage.getItem("reviews");
  if (reviewsString) {
    return JSON.parse(reviewsString);
  }
  return [];
};

const calculateAverageRating = (reviews: Array<IReview>) => {
  if (reviews.length === 0) return 0;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const showsAverageRating = totalRating / reviews.length;
  return showsAverageRating;
};

export const ShowsComponent = ({ show }: IShowsComponentProps) => {
  const [reviews, setReviews] = useState<Array<IReview>>(
    loadFromLocalStorage()
  );

  useEffect(() => {
    saveToLocalStorage(reviews);
  }, [reviews]);

  const handleAddReview = (review: IReviewContent) => {
    if (!review.rating || !review.comment) {
      return;
    }
    const newReview: IReview = {
      email: "",
      avatar: "https://via.placeholder.com/150",
      ...review
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
      <ShowsDetails show={show} averageRating={averageRating} />
      <ShowReviewSection
        reviews={reviews}
        onAddReview={handleAddReview}
        onDeleteReview={handleDeleteReview}
      />
    </Flex>
  );
};
