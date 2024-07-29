import { AuthRedirect } from "@/app/components/feature/auth/AuthRedirect/AuthRedirect";
import { ProfileUser } from "@/app/components/feature/ProfileUser/profile";
import { Flex } from "@chakra-ui/react";

export default function Profile() {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />

      <ProfileUser />
    </>
  );
}
