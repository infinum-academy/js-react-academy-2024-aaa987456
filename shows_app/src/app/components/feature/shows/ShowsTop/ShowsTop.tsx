"use client";

import { ShowsAll } from "../ShowsAll/ShowsAll";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetchers";

export const TopRatedShows = () => {
  return <ShowsAll fetcher={fetcher} url={swrKeys.top} />;
};
