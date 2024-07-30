import { Flex, Spinner } from "@chakra-ui/react";

export const SpinnerElement = () => {
  return (
    <Flex align="center" justify="center" height="100vh" width="100vw">
      <Spinner color="brand.400" width="50px" height="50px" />
    </Flex>
  );
};
