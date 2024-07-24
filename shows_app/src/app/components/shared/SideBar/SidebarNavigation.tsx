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
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const SideBarNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const sidebarWidth = useBreakpointValue({
    base: "100%",
    md: "300px"
  });

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        aria-label={""}
        backgroundColor="brand.300"
        color="white"
      />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="brand.200" borderTopLeftRadius="20px">
          <DrawerHeader
            backgroundColor="brand.200"
            borderBottomWidth="0px"
            borderTopLeftRadius="20px"
          >
            <Flex justify="space-between" align="center">
              <Img src="../assets/Logo.png" maxWidth="150px" maxHeight="30px" />
              <IconButton
                icon={<CloseIcon />}
                aria-label="Close menu"
                onClick={onClose}
                borderRadius="100px"
                color="white"
                backgroundColor="brand.200"
                border="2px solid white"
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody backgroundColor="brand.200">
            <Stack spacing="4">
              <NextLink href="/all-shows">
                <Text fontSize="headline" onClick={onClose} color="white">
                  All shows
                </Text>
              </NextLink>
              <NextLink href="/all-shows/top-rated">
                <Text fontSize="headline" onClick={onClose} color="white">
                  Top rated
                </Text>
              </NextLink>
              <NextLink href="/profile">
                <Text fontSize="headline" onClick={onClose} color="white">
                  My profile
                </Text>
              </NextLink>
              <Button
                onClick={handleLogout}
                backgroundColor="brand.200"
                color="white"
                width="full"
              >
                <Text fontSize="titleRegular" color="white">
                  Log Out
                </Text>
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box
        maxWidth={sidebarWidth}
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
    </>
  );
};
