export interface IShows {
  id:string;
  average_rating: number;
  description: string;
  image_url: string;
  no_of_reviews:number;
  title: string;
  }

  export interface IShowsResponse {
    shows: Array<IShows>;
  }