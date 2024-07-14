import { Flex } from "@chakra-ui/react";
import { ShowsComponentContainer } from "../../components/feature/shows/ShowsComponentContainer/ShowsComponentContainer";

export default function ShowSelectedId() {
  return (
    <Flex maxWidth="70%" direction="column">
      <ShowsComponentContainer />
    </Flex>
  );
}
