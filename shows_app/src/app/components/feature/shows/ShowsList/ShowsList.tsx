"use client";

import { ShowsAll } from "../ShowsAll/ShowsAll";
import { fetcher } from "@/fetchers/fetchers";
import { swrKeys } from "@/fetchers/swrKeys";

export const ShowsList = () => {
  return <ShowsAll fetcher={fetcher} url={swrKeys.ShowsAllApi} />;
};
