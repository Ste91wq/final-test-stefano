export interface IJokedResponse {
  type: string,
  value: {
    id: number,
    joke: string
  },
  category: []
}

export interface IJoke {
  id: number,
  joke: string
}
