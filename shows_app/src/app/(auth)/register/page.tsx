import { Container, Flex } from "@chakra-ui/react";
import { RegisterForm } from "@/app/components/feature/auth/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <Flex>
      <Container backgroundColor="brand.300" justifyContent="center">
        <RegisterForm />
      </Container>
    </Flex>
  );
}
