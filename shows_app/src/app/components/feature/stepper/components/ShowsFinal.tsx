import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useShowContext } from "./ShowsContextProvider";

export const ShowsFinal = () => {
  const { finalWinner } = useShowContext();

  if (!finalWinner) {
    return null;
  }

  return (
    <Flex direction="column" alignItems="center">
      <Text fontSize="titleRegular" mb={4} color="white">
        Tonight you are watching:
      </Text>
      <Image
        maxHeight="300px"
        src={finalWinner.image_url}
        alt={finalWinner.title}
      />
      <Text fontSize="titleRegular" color="white">
        {finalWinner.title}
      </Text>
      <Text color="white">{finalWinner.average_rating} /5</Text>
    </Flex>
  );
};
