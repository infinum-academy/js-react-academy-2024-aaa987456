"use client";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Text,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Flex,
  Img,
  DrawerBody,
  Stack
} from "@chakra-ui/react";
import NextLink from "next/link";
import { LogoutButton } from "./LogoutButton";
import { usePathname } from "next/navigation";

export const MobileSideBar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction="row" gap={2}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label={"Open side navigation"}
          backgroundColor="brand.300"
          color="white"
        />
        <Img src="../assets/Logo.png" maxWidth="150px" maxHeight="30px" />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="brand.200" borderTopLeftRadius="20px">
          <DrawerHeader
            backgroundColor="brand.200"
            borderBottomWidth="0px"
            borderTopLeftRadius="20px"
          >
            <Flex justify="space-between" align="center">
              <IconButton
                icon={<CloseIcon />}
                aria-label="Close side navigation"
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
                <Text
                  fontSize="headline"
                  color={isActive("/all-shows") ? "brand.400" : "white"}
                  onClick={onClose}
                >
                  All shows
                </Text>
              </NextLink>
              <NextLink href="/all-shows/top-rated">
                <Text
                  fontSize="headline"
                  color={
                    isActive("/all-shows/top-rated") ? "brand.400" : "white"
                  }
                  onClick={onClose}
                >
                  Top rated
                </Text>
              </NextLink>
              <NextLink href="/profile">
                <Text
                  fontSize="headline"
                  color={isActive("/profile") ? "brand.400" : "white"}
                  onClick={onClose}
                >
                  My profile
                </Text>
              </NextLink>
              <LogoutButton />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
