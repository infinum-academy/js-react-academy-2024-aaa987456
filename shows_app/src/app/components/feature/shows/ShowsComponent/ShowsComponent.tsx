"use client";

import React from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import useSWR from "swr";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection ";
import { IShows } from "../../../../typings/shows";
import { IReview } from "../../../../typings/reviews";
import { fetcher } from "@/fetchers/fetchers";
import { swrKeys } from "@/fetchers/swrKeys";
import { useParams } from "next/navigation";

export const ShowsComponent = () => {
  const params = useParams();
  const id = params?.id as string;

  const { data, error, isLoading } = useSWR<{ show: IShows }>(
    id ? swrKeys.selected(id) : null,
    fetcher
  );

  const {
    data: reviewsData,
    error: reviewsError,
    isLoading: reviewsIsLoading,
    mutate: mutateReviews
  } = useSWR<IReview[]>(id ? swrKeys.getReviews(id) : null, fetcher);

  if (error || reviewsError) {
    return (
      <Box>
        <Text>Failed to load data</Text>
      </Box>
    );
  }

  if (isLoading || reviewsIsLoading || !data) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  return (
    <Flex direction="column">
      <ShowDetails show={data.show} averageRating={data.show.average_rating} />
      <ShowReviewSection reviews={reviewsData || []} showId={id} />
    </Flex>
  );
};
