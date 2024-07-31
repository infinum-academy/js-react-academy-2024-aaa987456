import { Flex } from "@chakra-ui/react";
import { AuthRedirect } from "@/app/components/feature/auth/AuthRedirect/AuthRedirect";
import { ShowsComponent } from "@/app/components/feature/shows/ShowsComponent/ShowsComponent";

export default function ShowSelectedId() {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <Flex direction="column">
        <ShowsComponent />
      </Flex>
    </>
  );
}
