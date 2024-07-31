import { Flex } from "@chakra-ui/react";
import { AuthRedirect } from "../components/feature/auth/AuthRedirect/AuthRedirect";
import { ShowsList } from "../components/feature/shows/ShowsList/ShowsList";
import RootLayout from "../layout";

export default function AllShows() {
  return (
    <>
      <Flex maxWidth="70%">
        <AuthRedirect to="/login" condition="loggedOut" />
        <ShowsList />
      </Flex>
    </>
  );
}
