import React from "react";
import { ShowsDetails } from "../ShowsDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection ";
import { Ishows } from "@/app/typings/shows";
import { Flex } from "@chakra-ui/react";

interface IShowsComponentProps {
  show: Ishows;
}

export const ShowsComponent = ({ show }: IShowsComponentProps) => {
  const [averageRating, setAverageRating] = React.useState<number>(0);

  const handleAverageRatingChange = (newAverageRating: number) => {
    console.log('Updating average rating:', newAverageRating);
    setAverageRating(newAverageRating);
  };
  return (
    <Flex direction="column" width="80%" >
      <ShowsDetails show={show} averageRating={averageRating} />
      <ShowReviewSection onAverageRatingChange={handleAverageRatingChange} />
    </Flex>
  );
};
