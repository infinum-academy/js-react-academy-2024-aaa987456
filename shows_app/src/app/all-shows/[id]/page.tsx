import { Flex } from "@chakra-ui/react";
import { ShowsComponentContainer } from "../../components/feature/shows/ShowsComponentContainer/ShowsComponentContainer";
import RootLayout from "@/app/layout";
import { AuthRedirect } from "@/app/components/feature/auth/AuthRedirect/AuthRedirect";

export default function ShowSelectedId() {
  return (
    <RootLayout showSidebar={true}>
      <AuthRedirect to="/login" condition="loggedOut" />

      <Flex maxWidth="70%" direction="column">
        <ShowsComponentContainer />
      </Flex>
    </RootLayout>
  );
}
