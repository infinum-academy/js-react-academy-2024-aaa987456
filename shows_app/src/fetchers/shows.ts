import { fetcher } from "./fetchers";
import { IShows, IShowsResponse } from "../app/typings/shows";
import { swrKeys } from "./swrKeys";

export function getAllShows() {
  return fetcher<IShowsResponse>(swrKeys.ShowsAllApi);
}

export function getAllShow(id: string) {
  return fetcher<IShows>(`/shows/${id}`);
}

export function getTopShows() {
  return fetcher<IShowsResponse>(swrKeys.top);
}
