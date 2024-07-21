import { fetcher } from "./fetchers";
import { IShows, IShowsResponse } from "../app/typings/shows";
import { swrKeys } from "./swrKeys";
import { IReview } from "@/app/typings/reviews";

export function getAllShows() {
  return fetcher<IShowsResponse>(swrKeys.ShowsAllApi);
}

export function getAllShow(id: string) {
  return fetcher<IShows>(`/shows/${id}`);
}

export function getTopShows() {
  return fetcher<IShowsResponse>(swrKeys.top);
}

export function getReviews(showId: string) {
  return fetcher<IReview[]>(swrKeys.getReviews(showId));
}
