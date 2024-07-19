import { Box, Divider, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const SideBarNavigation = () => {
  return (
    <Box
      maxWidth="300px"
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      backgroundColor="brand.100"
      color="white"
      padding="4"
      display="flex"
      flexDirection="column"
    >
      <Stack spacing="4" flexGrow={1}>
        <NextLink href="/all-shows">
          <Text fontSize="lg">All shows</Text>
        </NextLink>
        <NextLink href="/all-shows/top-rated">
          <Text fontSize="lg">Top rated</Text>
        </NextLink>
        <NextLink href="/profile">
          <Text fontSize="lg">My profile</Text>
        </NextLink>
        <Divider />
        <Spacer />
      </Stack>

      <Flex justify="center">
        <Text fontSize="lg">Log Out</Text>
      </Flex>
    </Box>
  );
};
