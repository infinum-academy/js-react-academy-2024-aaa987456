import { Button, Text } from "@chakra-ui/react";
import { handleLogout } from "./Logout";

export const LogoutButton = () => {
  return (
    <Button
      onClick={handleLogout}
      backgroundColor="brand.300"
      color="white"
      width="auto"
      _hover={{ backgroundColor: "brand.400" }}
    >
      <Text fontSize="titleRegular">Log Out</Text>
    </Button>
  );
};
