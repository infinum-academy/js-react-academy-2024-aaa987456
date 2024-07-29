import RootLayout from "@/app/layout";
import { TopRatedShows } from "../../components/feature/shows/ShowsTop/ShowsTop";
import { AuthRedirect } from "@/app/components/feature/auth/AuthRedirect/AuthRedirect";
import { Flex } from "@chakra-ui/react";

export default function AllShows() {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <TopRatedShows />
    </>
  );
}
