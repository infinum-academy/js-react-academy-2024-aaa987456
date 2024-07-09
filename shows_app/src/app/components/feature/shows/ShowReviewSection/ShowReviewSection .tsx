import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../reviews/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReview } from "@/app/typings/reviews";

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

interface IShowReviewSectionProps {
  onAverageRatingChange: (averageRating: number) => void;
}

export const ShowReviewSection = ({ onAverageRatingChange }: IShowReviewSectionProps) => {
  const [reviews, setReviews] = useState<Array<IReview>>([]);
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const savedReviews = loadFromLocalStorage();
    if (savedReviews.length > 0) {
      setReviews(savedReviews);
      const avgRating = calculateAverageRating(savedReviews);
      setAverageRating(avgRating);
      if (typeof onAverageRatingChange === 'function') {
        onAverageRatingChange(avgRating);
      }
    }
  }, [onAverageRatingChange]);

  useEffect(() => {
    saveToLocalStorage(reviews);
    const avgRating = calculateAverageRating(reviews);
    setAverageRating(avgRating);
    if (typeof onAverageRatingChange === 'function') {
      onAverageRatingChange(avgRating);
    }
  }, [onAverageRatingChange, reviews]);

  const addShowReview = (review: { rating: number; comment: string }) => {
    if (!review.rating || !review.comment) {
      return;
    }
    const newReview = {
      email: "",
      avatar: "https://via.placeholder.com/150",
      ...review,
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
  };

  const removeReview = (reviewToRemove: IReview) => {
    setReviews(reviews.filter((review) => review !== reviewToRemove));
  };

  return (
    <Box width="100%">
      <ReviewForm addShowReview={addShowReview} />
      <ReviewList reviews={reviews} onDeleteReview={removeReview} />
    </Box>
  );
};
