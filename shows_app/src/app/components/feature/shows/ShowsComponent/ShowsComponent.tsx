import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { ShowsDetails } from "../ShowsDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection ";
import { Ishows } from "@/app/typings/shows";
import { IReview, IReviewContent } from "@/app/typings/reviews";

interface IShowsComponentProps {
  show: Ishows;
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
  const [reviews, setReviews] = useState<Array<IReview>>([]);
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const savedReviews = loadFromLocalStorage();
    setReviews(savedReviews);
  }, []);

  useEffect(() => {
    saveToLocalStorage(reviews);
    const avgRating = calculateAverageRating(reviews);
    setAverageRating(avgRating);
  }, [reviews]);

  const handleAddReview = (review: IReviewContent) => {
    if (!review.rating || !review.comment) {
      return;
    }
    const newReview: IReview = {
      email: "",
      avatar: "https://via.placeholder.com/150",
      ...review,
    };
    setReviews([...reviews, newReview]);
  };

  const handleDeleteReview = (reviewToRemove: IReview) => {
    const updatedReviews = reviews.filter((review) => review !== reviewToRemove);
    setReviews(updatedReviews);
  };

  return (
    <Flex direction="column" width="80%">
      <ShowsDetails show={show} averageRating={averageRating} />
      <ShowReviewSection
        reviews={reviews}
        onAddReview={handleAddReview}
        onDeleteReview={handleDeleteReview}
      />
    </Flex>
  );
};
