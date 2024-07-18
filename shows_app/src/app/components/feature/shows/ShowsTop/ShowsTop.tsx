"use client";

import { getTopShows } from "../../../../../fetchers/shows";
import { ShowsAll } from "../ShowsAll/ShowsAll";

export const TopRatedShows = () => {
  return <ShowsAll fetcher={getTopShows} url="/api/top-shows" />;
};
