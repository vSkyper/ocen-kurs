export interface ReviewTabProps {
  rev: ReviewTabElementProps;
}

export interface ReviewTabElementProps {
  revId: number;
  author: string;
  review: string;
  rating: number;
}
