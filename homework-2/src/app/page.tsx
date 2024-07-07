import { ShowReviewSection } from "./components/feature/shows/ShowReviewSection ";
import { ShowsDetails } from "./components/feature/shows/ShowsDetails";
import styles from "./page.module.css";
import { Ishows } from "./typings/shows";

const mockedShow: Ishows = {
  title: "Brooklyn Nine-Nine",
  description:
    "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD 99th Precinct.",
  image_url: "/assets/brooklyn.jpg",
  averageRating: 0,
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.main_title}>TV Shows APP</h1>
      <ShowsDetails show={mockedShow} />
      <ShowReviewSection />
    </main>
  );
}
