import { Action, Thunk, action, thunk } from 'easy-peasy'

import { api } from '../lib'

export interface Film {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: {
    name: string
  }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export interface Result {
  backdrop_path: string
  id: number
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}

interface FilmsModel {
  loading: boolean

  films: any

  fetch: Thunk<FilmsModel, number>

  setLoading: Action<FilmsModel, boolean>
  setFilm: Action<
    FilmsModel,
    {
      id: number
      film: Film
    }
  >
}

const films: FilmsModel = {
  loading: false,

  films: {},

  fetch: thunk(async (actions, id) => {
    actions.setLoading(true)

    const film = await api.fetch(id)

    actions.setFilm({
      film,
      id
    })

    actions.setLoading(false)
  }),

  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  setFilm: action((state, { film, id }) => {
    state.films[id] = film
  })
}

interface ResultsModel {
  loading: boolean

  results: Result[]

  search: Thunk<ResultsModel, string>

  setLoading: Action<ResultsModel, boolean>
  setResults: Action<ResultsModel, Result[]>
}

const results: ResultsModel = {
  loading: false,

  results: [],

  search: thunk(async (actions, query) => {
    actions.setLoading(true)

    const films = await api.search(query)

    actions.setResults(films)

    actions.setLoading(false)
  }),

  setLoading: action((state, loading) => {
    state.loading = loading
  }),
  setResults: action((state, films) => {
    state.results = films
  })
}

export interface StoreModel {
  films: FilmsModel
  results: ResultsModel
}

const model: StoreModel = {
  films,
  results
}

export default model
