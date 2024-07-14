"use client";

import { getAllShows } from "../../../../../fetchers/shows";
import { ShowsAll } from "../ShowsAll/ShowsAll";

export const ShowsList = () => {
  return <ShowsAll fetcher={getAllShows} url="/api/shows" />;
};
