"use client";

import { IShows } from "../../../../typings/shows";
import { SimpleGrid, Box, Spinner, Text, Flex } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";
import useSWR from "swr";
import { SpinnerElement } from "@/app/components/shared/SpinnerElement";

export interface ShowListProps {
  fetcher: (url: string) => Promise<{ shows: IShows[] }>;
  url: string;
}

export const ShowsAll = ({ fetcher, url }: ShowListProps) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error)
    return (
      <Box>
        <Text>Failed to load shows</Text>
      </Box>
    );
  if (isLoading) {
    return <SpinnerElement />;
  }

  const showsFetched = data?.shows || [];

  return (
    <Flex flexGrow={1} gap={4}>
      <SimpleGrid padding="8px" columns={[1, 2, 3, 4]} gap={4} flexGrow={1}>
        {showsFetched.map((show: IShows) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
