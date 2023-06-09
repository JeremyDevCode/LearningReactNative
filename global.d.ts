export interface Repository {
    id: string;
    fullName: string;
    description: string;
    language: string;
    stargazersCount: number;
    forksCount: number;
    reviewCount: number;
    ratingAverage: number;
    imageURI?: string;
  }