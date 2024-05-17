//Detail Page for the Movie
//The data we recieve when clicking on a title card
export interface MovieTitle {
  backdrop_path?: string; //
  genres: Genre[]; //
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  release_date: string;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  tagline: string;
  title: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Networks {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

//////////////////////////////////////////////////////////
//Detail Page for TV Show
//const url = 'https://api.themoviedb.org/3/tv/series_id?language=en-US';
export interface TVTitle {
  name: string;
  backdrop_path: string;
  first_air_date: string;
  genres?: Genre[];
  id: number;
  languages?: string[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  spoken_languages?: SpokenLanguage[];
  tagline?: string;
  networks?: Networks[];
}

export interface SearchTitles {
  backdrop_path?: string;
  id: number;
  original_title?: string;
  overview: string;
  poster_path?: string;
  media_type: string;
  adult: boolean;
  title?: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country: string[];
}
