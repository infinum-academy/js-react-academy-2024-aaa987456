
import { fetcher } from "./fetchers";
import { IShows, IShowsResponse } from "../app/typings/shows";


export function getAllShows(){
    return fetcher<IShowsResponse>("/api/shows");
}

export function getAllShow(id:string){

    return fetcher<IShows>(`/api/shows/${id}`)

}

export function getTopShows(){
    return fetcher<IShowsResponse>("/api/shows/top-rated");
}