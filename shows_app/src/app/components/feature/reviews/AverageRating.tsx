import { IShows } from "@/app/typings/shows";
import { Text } from "@chakra-ui/react";

interface IAverageRatingDisplayProps {
  averageRating: number;
}

export const AverageRatingDisplay = ({
  averageRating
}: IAverageRatingDisplayProps) => {
  return (
    <Text color="brand.200" fontSize="xl">
      {averageRating ? `${averageRating.toFixed(2)}/5` : "No ratings"}
    </Text>
  );
};
