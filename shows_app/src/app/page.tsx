"use client";

import { ShowCard } from "./components/feature/shows/ShowCard/ShowCard";
import { ShowReviewSection } from "./components/feature/shows/ShowReviewSection/ShowReviewSection ";
import { ShowsComponent } from "./components/feature/shows/ShowsComponent/ShowsComponent";
import { ShowsDetails } from "./components/feature/shows/ShowsDetails";
import { ShowsList } from "./components/feature/shows/ShowsList/ShowsList";
import styles from "./page.module.css";
import { IShows } from "./typings/shows";

const mockedShow: IShows = {
  title: "Brooklyn Nine-Nine",
  description: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD 99th Precinct.",
  image_url: "/assets/brooklyn.jpg",
  average_rating: 0,
  id: "",
  no_of_reviews: 0
};


export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.main_title}>TV Shows APP</h1>
      <ShowsComponent show={mockedShow}/>
      {/* <ShowCard show={mockedShow}/> */}
    </main>
  );
}
