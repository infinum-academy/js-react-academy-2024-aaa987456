import { ShowsList } from "../components/feature/shows/ShowsList/ShowsList";
import RootLayout from "../layout";

export default function AllShows() {
  return (
    <RootLayout showSidebar={true}>
      <ShowsList />
    </RootLayout>
  );
}
