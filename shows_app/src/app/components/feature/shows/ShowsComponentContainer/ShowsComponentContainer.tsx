"use client";

import { getAllShow } from "../../../../../fetchers/shows";
import { Box, Text, Spinner, Flex } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { ShowsComponent } from "../ShowsComponent/ShowsComponent";
import { fetcher } from "@/fetchers/fetchers";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShows } from "@/app/typings/shows";

export const ShowsComponentContainer = () => {
  const params = useParams();

  const { data, error, isLoading } = useSWR<IShows>(
    swrKeys.selected(params.id as string),
    fetcher
  );

  if (error)
    return (
      <Box>
        <Text>Failed to load shows</Text>
      </Box>
    );
  if (isLoading || !data)
    return (
      <Box>
        <Spinner />
      </Box>
    );

  return (
    <Flex>
      <ShowsComponent show={data} />
    </Flex>
  );
};
