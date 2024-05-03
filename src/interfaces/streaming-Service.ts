export interface StreamingService {
        name: string
        logo_url: string
        prices: Price[]
      }
      
export interface Price {
        plan: string
        price: number
        ads: boolean
      }

  //What we need/will be working this
  //All the info we need to display cards
  //WIP
  export interface cardTitle {
    title: string
    year: string 
    poster: string
    genre?: string[]
    streaming_services: StreamingService[]
  }

  //////////////////////////////////////////////////////////////////////////
  //Detail Page for the Movie
  //The data we recieve when clicking on a title card 
  export interface MovieTitle {
    backdrop_path?: string //
    genres: Genre[] //
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    poster_path?: string
    release_date: string
    runtime: number
    spoken_languages: SpokenLanguage[]
    tagline: string
    title: string
  }
  
  export interface Genre {
    id: number
    name: string
  }
  
  export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
  }


 //////////////////////////////////////////////////////////
  //Detail Page for TV Show
//const url = 'https://api.themoviedb.org/3/tv/series_id?language=en-US';
  export interface TVTitle {
    name: string
    backdrop_path: string
    first_air_date: string
    genres?: Genre[]
    id: number
    languages?: string[]
    
    number_of_episodes?: number
    number_of_seasons?: number
    origin_country?: string[]
    original_language?: string
    original_name?: string
    overview?: string
    poster_path?: string
    spoken_languages?: SpokenLanguage[]
    tagline?: string
  }
  