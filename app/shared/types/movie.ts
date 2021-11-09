export interface IMovie {
  id: string | number
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type Genre = {
  id: string
  name: string
}

type ProductionCompany = {
  id: string
  name: string
  logo_path: string
  origin_country: string
}

type ProductionCountry = {
  iso_3166_1: string
  name: string
}

type SpokenLanguage = {
  iso_639_1: string
  name: string
}

export interface IMovieDetails extends IMovie {
  belongs_to_collection: boolean | null
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
}

export interface IMovieActor {
  adult: boolean
  gender: number
  id: string | number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: string | number
  character: string
  credit_id: string
  order: number
}

export interface IMovieStates {
  id: string | number
  favorite: boolean
  rated: {
    value: number
  }
  watchlist: boolean
}
