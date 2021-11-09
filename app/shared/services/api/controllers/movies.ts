import { AxiosInstance } from 'axios'
// types
import {
  IMovie,
  IMovieActor,
  IMovieDetails,
  IMovieStates,
} from '@md-shared/types/movie'

export interface GetMoviesResponse {
  results: IMovie[]
  total_results: number
}

export interface GetMoviesVariables {
  page: number
}

export interface GetFavoritesMoviesVariables {
  page: number
  profileId: string
}

export interface GetSearchMoviesVariables {
  page: number
  query: string
}

export interface GetMovieDetailsVariables {
  movieId: string | number
}

export interface SetMovieAsFavoriteVariables {
  isFavorite: boolean
  profileId: string | number
  movieId: string | number
}

export const getMoviesControllers = (api: AxiosInstance) => ({
  getPopularMovies: ({ page }: GetMoviesVariables) =>
    api.get<GetMoviesResponse>('/movie/popular', {
      params: {
        page,
      },
    }),
  getFavoritesMovies: ({ profileId, page }: GetFavoritesMoviesVariables) =>
    api.get<GetMoviesResponse>(`/account/${profileId}/favorite/movies`, {
      params: {
        page,
      },
    }),
  getSearchMovies: ({ query, page }: GetSearchMoviesVariables) =>
    api.get<GetMoviesResponse>(`/search/movie`, {
      params: {
        page,
        query,
      },
    }),
  getMovieDetails: ({ movieId }: GetMovieDetailsVariables) =>
    api.get<IMovieDetails>(`/movie/${movieId}`),
  getMovieActors: ({ movieId }: GetMovieDetailsVariables) =>
    api.get<{ cast: IMovieActor[] }>(`/movie/${movieId}/credits`),
  getMovieStates: ({ movieId }: GetMovieDetailsVariables) =>
    api.get<IMovieStates>(`/movie/${movieId}/account_states`),
  setMovieIsFavoriteState: ({
    profileId,
    movieId,
    isFavorite,
  }: SetMovieAsFavoriteVariables) =>
    api.post<GetMoviesResponse>(`/account/${profileId}/favorite`, {
      media_type: 'movie',
      media_id: movieId,
      favorite: isFavorite,
    }),
})
