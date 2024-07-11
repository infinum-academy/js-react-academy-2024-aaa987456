"use client"

import { SimpleGrid, Box, Spinner, Text, Flex } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";
import useSWR from "swr";
import { getTopShows } from "../../../../../fetchers/shows";
import { IShows } from "../../../../typings/shows";

export const TopRatedShows = () => {
  const { data, error, isValidating } = useSWR('/api/shows/top-rated', getTopShows);

  if (error) return <Box><Text>Failed to load top rated shows</Text></Box>;
  if (isValidating) return <Box><Spinner /></Box>;

  const showsFetched = data?.shows|| [];

  return (
    <Flex justifyContent="flex-end">
    <SimpleGrid padding="8px" maxWidth="75%" columns={[1, 2, 3, 4]} gap={4}>
      {showsFetched.map((show: IShows) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </SimpleGrid>
    </Flex>
  );
};
