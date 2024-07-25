export interface IReviewContent {
  rating: number;
  comment: string;
  show_id: string;
}

export interface IReview {
  id: string;
  avatar: string;
  rating: number;
  comment: string;
  show_id: string;
  email: string;
  user: IUser;
}

export interface IUser {
  id: string;
  email: string;
  image_url: string;
}
