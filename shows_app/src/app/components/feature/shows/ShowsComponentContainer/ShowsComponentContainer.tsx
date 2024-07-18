"use client";

import { getAllShow } from "../../../../../fetchers/shows";
import { Box, Text, Spinner, Flex } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { ShowsComponent } from "../ShowsComponent/ShowsComponent";

export const ShowsComponentContainer = () => {
  const params = useParams();

  console.log(params);

  const { data, error, isLoading } = useSWR(`/api/shows/${params.id}`, () =>
    getAllShow(params.id as string)
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
