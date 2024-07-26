import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { ShowContext, useShowContext } from "./ShowsContextProvider";

export const ShowsFinal = () => {
  const { selectedShows } = useShowContext();

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>
        Tonight you are watching:
      </Text>
    </Box>
  );
};
