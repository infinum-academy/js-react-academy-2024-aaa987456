import { AuthRedirect } from "../components/feature/auth/AuthRedirect/AuthRedirect";
import { ShowsList } from "../components/feature/shows/ShowsList/ShowsList";
import RootLayout from "../layout";

export default function AllShows() {
  return (
    <RootLayout showSidebar={true}>
      <AuthRedirect to="/login" condition="loggedOut" />
      <ShowsList />
    </RootLayout>
  );
}
