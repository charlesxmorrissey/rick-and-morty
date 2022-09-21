export interface Resident {
  id: string
  image: string
  name: string
  species: string
  status: string
  type: string
}

export interface LocationResponse {
  dimension: string
  id: string
  name: string
  residents: Resident[]
  type: string
}
