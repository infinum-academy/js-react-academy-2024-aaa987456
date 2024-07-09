import {  Text } from "@chakra-ui/react";

export const AverageRatingDisplay = ({ averageRating }: { averageRating: number }) => {
    return (
      <Text color="#3f117c" fontSize="xl">
        {averageRating
         ? `${averageRating.toFixed(1)}/5`
          : "No ratings"}
      </Text>
    );
  };