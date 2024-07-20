export interface IReviewContent {
  rating: number;
  comment: string;
}

export interface IReview {
  email: string;
  avatar: string;
  rating: number;
  comment: string;
  averageRating?: number;
  show_id: string;
}
