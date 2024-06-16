export interface ReviewTabProps {
  rev: ReviewTabElementProps;
}

export interface ReviewTabElementProps {
  revId: string;
  author: string;
  review: string;
  rating: number;
}
