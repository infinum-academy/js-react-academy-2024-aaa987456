import { LoginForm } from "../../components/feature/auth/LoginForm/LoginForm";
import { AuthRedirect } from "../../components/feature/auth/AuthRedirect/AuthRedirect";

export default function Login() {
  return (
    <>
      <AuthRedirect to="/all-shows" condition="loggedIn" />
      <LoginForm />
    </>
  );
}
