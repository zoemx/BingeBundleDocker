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
      
//Create title/move/show interface

/* export interface TitleList {
    titles: Title[]
    page: number
    total_results: number
    total_pages: number
  } */

  //Is title Id === titleDetails
  //potentially match by title
  //TITLE API 
  //"id": 3173903,
  //"title": "Breaking Bad",

  //LIST TITLE API
  export interface Title {
    id: number
    title: string
    year: number
    imdb_id: string
    tmdb_id: number
    tmdb_type: string
    type: string
  }

export interface TitleDetails {
    id: number
    title: string
    original_title?: string
    plot_overview: string
    type: string
    runtime_minutes: number
    year: number
    end_year?: number
    release_date?: string
    imdb_id?: string
    tmdb_id?: number
    tmdb_type?: string
    genres: number[]
    genre_names: string[]
    user_rating: number
    critic_score: number
    us_rating: string
    poster: string
    backdrop: string
    original_language: string
    similar_titles: number[]
    networks: number[]
    network_names: string[]
    trailer: string
    trailer_thumbnail: string
    relevance_percentile: number
    sources: Source[]
  }
  
  export interface Source {
    source_id: number
    name: string
    type: string
    region: string
    ios_url: string
    android_url?: string
    web_url: string
    format: string
    price?: number
    seasons: number
    episodes: number
  }
  
