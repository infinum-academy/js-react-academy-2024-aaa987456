import RootLayout from "@/app/layout";
import { TopRatedShows } from "../../components/feature/shows/ShowsTop/ShowsTop";

export default function AllShows() {
  return (
    <RootLayout showSidebar={true}>
      <TopRatedShows />
    </RootLayout>
  );
}
