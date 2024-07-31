import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Box, Flex, Show } from "@chakra-ui/react";
import { SideBarNavigation } from "../components/shared/SideBar/SidebarNavigation";
import { MobileSideBar } from "../components/shared/SideBar/MobileSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shows app",
  description: "Generated by create next app"
};

export default function ProfileLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box width={{ base: "column", md: "row" }} marginRight="20vw">
      <Show above="md">
        <Box>
          <SideBarNavigation />
          <Flex
            flex="1"
            justifyContent="center"
            marginLeft="20vw"
            overflow="hidden"
          >
            {children}
          </Flex>
        </Box>
      </Show>
      <Show below="md">
        <MobileSideBar />
        <Flex flex="1">{children}</Flex>
      </Show>
    </Box>
  );
}
