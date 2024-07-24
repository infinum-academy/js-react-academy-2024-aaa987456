import { Container } from "@chakra-ui/react";
import { RegisterForm } from "@/app/components/feature/auth/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <Container
      backgroundColor="purple.500"
      padding="10px"
      justifyContent="center"
    >
      <RegisterForm />
    </Container>
  );
}
