import { Flex } from "@chakra-ui/react";
import { AuthRedirect } from "../components/feature/auth/AuthRedirect/AuthRedirect";
import { ShowsList } from "../components/feature/shows/ShowsList/ShowsList";

export default function AllShows() {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <ShowsList />
    </>
  );
}
