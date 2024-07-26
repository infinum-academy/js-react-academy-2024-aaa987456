"use client";

import { Box, Flex, Text, Img, Spinner, Button } from "@chakra-ui/react";
import useSWR from "swr";
import { StarIcon } from "@chakra-ui/icons";
import { fetcher } from "@/fetchers/fetchers";
import { IUser } from "@/app/typings/reviews";
import { swrKeys } from "@/fetchers/swrKeys";
import { StepperFavorite } from "../stepper/Stepper";

export const ProfileUser = () => {
  const { data, error, isLoading } = useSWR<{ user: IUser }>(
    swrKeys.user,
    fetcher
  );

  if (error)
    return (
      <Box>
        <Text>Failed to load user data</Text>
      </Box>
    );
  if (isLoading)
    return (
      <Box>
        <Spinner />
      </Box>
    );

  const user = data?.user;

  return (
    <Flex direction="column" align="center" gap={4} padding="4">
      {user ? (
        <>
          <Flex alignItems="center" gap={4} direction="column">
            <Flex direction="column" alignItems="center">
              <Text textStyle="titleRegular" color="white">
                EMAIL
              </Text>
              <Text textStyle="titleBold" color="white">
                {user.email}
              </Text>
            </Flex>
            <Img
              src={
                user.image_url || "https://fakeimg.pl/1000x800/7d3838/909090"
              }
              alt="User image"
              boxSize="300px"
              objectFit="cover"
              borderRadius="full"
            />
            <Button textStyle="button" borderRadius="30px">
              Upload Image
            </Button>
            <StepperFavorite />
          </Flex>
        </>
      ) : (
        <Text>No user data</Text>
      )}
    </Flex>
  );
};
