import { AuthRedirect } from "@/app/components/feature/auth/AuthRedirect/AuthRedirect";
import { ProfileUser } from "../components/feature/ProfileUser/Profile";

export default function Profile() {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <ProfileUser />
    </>
  );
}
