"use client";

import React from "react";
import { Box, Flex, Img, Spacer, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { LogoutButton } from "./LogoutButton";

export const SideBarNavigation = () => {
  return (
    <Box
      width="20vw"
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      backgroundColor="brand.300"
      color="white"
      padding="4"
      display="flex"
      flexDirection="column"
    >
      <Img src="../assets/Logo.png" maxWidth="200px" paddingBottom="55px" />
      <Stack spacing="4" flexGrow={1}>
        <NextLink href="/all-shows">
          <Text fontSize="headline">All shows</Text>
        </NextLink>
        <NextLink href="/all-shows/top-rated">
          <Text fontSize="headline">Top rated</Text>
        </NextLink>
        <NextLink href="/profile">
          <Text fontSize="headline">My profile</Text>
        </NextLink>
        <Spacer />
      </Stack>
      <Flex justifyContent="flex-start">
        <LogoutButton />
      </Flex>
    </Box>
  );
};
