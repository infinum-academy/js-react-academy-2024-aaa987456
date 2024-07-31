"use client";

import React from "react";
import {
  Box,
  Button,
  Flex,
  Img,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

export const SideBarNavigation = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  return (
    <Box
      maxWidth="500px"
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      backgroundColor="brand.300"
      color="white"
      padding="4"
      display={{ base: "none", md: "flex" }}
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
        <Button
          onClick={handleLogout}
          backgroundColor="brand.300"
          color="white"
          width="auto"
        >
          <Text fontSize="titleRegular">Log Out</Text>
        </Button>
      </Flex>
    </Box>
  );
};
