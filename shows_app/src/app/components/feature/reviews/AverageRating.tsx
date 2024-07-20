import { IShows } from "@/app/typings/shows";
import { Text } from "@chakra-ui/react";

interface IAverageRatingDisplayProps {
  averageRating: number;
}

export const AverageRatingDisplay = ({
  averageRating
}: IAverageRatingDisplayProps) => {
  return (
    <Text color="#3f117c" fontSize="xl">
      {averageRating ? `${averageRating.toFixed(1)}/5` : "No ratings"}
    </Text>
  );
};
