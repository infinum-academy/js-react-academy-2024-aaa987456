import { Box, Flex, Text, Spinner } from "@chakra-ui/react";
import RootLayout from "@/app/layout";
import { AuthRedirect } from "@/app/components/feature/auth/AuthRedirect/AuthRedirect";
import { ShowsComponent } from "@/app/components/feature/shows/ShowsComponent/ShowsComponent";

export default function ShowSelectedId() {
  return (
    <RootLayout showSidebar={true}>
      <AuthRedirect to="/login" condition="loggedOut" />

      <Flex maxWidth="70%" direction="column">
        <ShowsComponent />
      </Flex>
    </RootLayout>
  );
}
