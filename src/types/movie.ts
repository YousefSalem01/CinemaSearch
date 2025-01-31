export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Type?: string;
  }
  
  export interface MovieDetail extends Movie {
    Genre?: string;
    Plot?: string;
    Director?: string;
    Actors?: string;
    Runtime?: string;
    imdbRating?: string;
    Rated?: string;
    Released?: string;
    BoxOffice?: string;
    Ratings?: Rating[];
    Country?: string;
    Language?: string;
    Awards?: string;
  }
  
  interface Rating {
    Source: string;
    Value: string;
  }
  
  export interface MovieResponse {
    Response: string;
    Search?: Movie[];
    totalResults?: string;
    Error?: string;
  }