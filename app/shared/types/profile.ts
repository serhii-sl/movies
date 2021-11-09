export interface IProfile {
  avatar: {
    gravatar: {
      hash: string | null
    }
    tmdb: { avatar_path: string | null }
  }
  id: string
  iso_639_1: string
  iso_3166_1: string
  name: string
  include_adult: boolean
  username: string
}
