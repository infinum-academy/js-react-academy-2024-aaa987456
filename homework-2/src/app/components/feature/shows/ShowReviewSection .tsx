"use client";

import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ReviewList } from "../reviews/ReviewList";
import { ReviewForm } from "./ReviewForm";
import { useEffect } from "react";
import { IReviewItemProps } from "../reviews/ReviewItem";

export interface IReview {
  email: string;
  avatar: string;
  rating: number;
  comment: string;
}

const saveToLocalStorage = (reviews: IReview[]) => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
};

const loadFromLocalStorage = () => {
  const reviewsString = localStorage.getItem("reviews");
  if (reviewsString) {
    return JSON.parse(reviewsString);
  }
  return [];
};
export const ShowReviewSection = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const savedReviews = loadFromLocalStorage();
    if (savedReviews.length > 0) {
      setReviews(savedReviews);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage(reviews);
  }, [reviews]);

  const addShowReview = (review: { rating: number; comment: string }) => {
    const newReview = {
      email: "",
      avatar: "https://via.placeholder.com/150",
      ...review,
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    saveToLocalStorage(updatedReviews);
  };
  const removeReview = (index: any) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    saveToLocalStorage(updatedReviews);
  };

  return (
    <Box width="70%">
      <ReviewForm addShowReview={addShowReview} />
      <ReviewList reviews={reviews} onDeleteTeReview={removeReview} />
    </Box>
  );
};
