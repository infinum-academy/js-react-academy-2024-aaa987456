import { INavigationItem } from "../../../typings/sidebar";
import { Box, Divider, Link, Stack,Text } from "@chakra-ui/react";
import NextLink from "next/link";

// interface ISidebarNavigationProps {
//     items: Array<INavigationItem>;
//   }


  export const SideBarNavigation=()=>{

    return (
        <Box
          max-width="250px"
          position="fixed"
          left="0"
          top="0"
          bottom="0"
          backgroundColor="brand.100"
          color="white"
          padding="4"
        >
          <Stack spacing="4">
          <NextLink href={"/all-shows"}><Text>All shows</Text></NextLink>
          <NextLink href={"/all-shows/top-rated"}><Text>Top rated</Text></NextLink>
          <NextLink href={""}><Text>My profile</Text></NextLink>
           
           
            <Divider />
            
            <Text >Log Out</Text>
          </Stack>
        </Box>
      );

  }