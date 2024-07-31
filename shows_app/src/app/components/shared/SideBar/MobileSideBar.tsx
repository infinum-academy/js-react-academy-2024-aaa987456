"use client";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Text,
  useDisclosure,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Flex,
  Img,
  DrawerBody,
  Stack,
  Button
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";

export const MobileSideBar = () => {
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
      <Flex direction="row" gap={2}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
          aria-label={""}
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
    </>
  );
};
