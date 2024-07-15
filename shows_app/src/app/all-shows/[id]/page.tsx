import { Flex } from "@chakra-ui/react";
import { ShowsComponentContainer } from "../../components/feature/shows/ShowsComponentContainer/ShowsComponentContainer";
import RootLayout from "@/app/layout";

export default function ShowSelectedId() {
  return (
    <RootLayout showSidebar={true}>
      <Flex maxWidth="70%" direction="column">
        <ShowsComponentContainer />
      </Flex>
    </RootLayout>
  );
}
