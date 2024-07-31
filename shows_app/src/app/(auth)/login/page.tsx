import { Container, Flex } from "@chakra-ui/react";
import { LoginForm } from "../../components/feature/auth/LoginForm/LoginForm";
import { AuthRedirect } from "../../components/feature/auth/AuthRedirect/AuthRedirect";

export default function Login() {
  return (
    <>
      <AuthRedirect to="/all-shows" condition={"loggedIn"} />
      <Flex justifyItems="center">
        <Container backgroundColor="brand.300">
          <LoginForm />
        </Container>
      </Flex>
    </>
  );
}
