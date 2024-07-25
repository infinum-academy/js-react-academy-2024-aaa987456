import { Container } from "@chakra-ui/react";
import { LoginForm } from "../../components/feature/auth/LoginForm/LoginForm";
import { AuthRedirect } from "../../components/feature/auth/AuthRedirect/AuthRedirect";

export default function Login() {
  return (
    <>
      <AuthRedirect to="/all-shows" condition={"loggedIn"} />
      <Container
        backgroundColor="purple.500"
        padding="10px"
        justifyContent="center"
      >
        <LoginForm />
      </Container>
    </>
  );
}
