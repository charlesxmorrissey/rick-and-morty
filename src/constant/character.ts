interface Episode {
  episode: string
  name: string
}

export interface CharacterArgs {
  id: string | string[] | undefined
}

export interface CharacterResponse {
  episode: Episode[]
  gender: string
  id: string
  image: string
  location: {
    id: string
    name: string
  }
  name: string
  species: string
  status: string
  type: string
}
