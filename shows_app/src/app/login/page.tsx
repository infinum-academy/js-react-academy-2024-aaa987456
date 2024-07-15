import { Container } from "@chakra-ui/react";
import { LoginForm } from "../components/feature/auth/LoginForm/LoginForm";

export default function Login() {
  return (
    <Container
      backgroundColor="purple.500"
      padding="10px"
      justifyContent="center"
    >
      <LoginForm />
    </Container>
  );
}
