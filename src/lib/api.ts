const { REACT_APP_API_KEY, REACT_APP_API_URI } = process.env

class API {
  async search(query: string) {
    const { results } = await this.request(
      `/search/movie?query=${encodeURIComponent(query)}`
    )

    return results
  }

  fetch(id: number) {
    return this.request(`/movie/${id}`)
  }

  async request(uri: string) {
    const url = new URL(REACT_APP_API_URI + uri)

    url.searchParams.append('api_key', REACT_APP_API_KEY as string)

    const response = await fetch(url.toJSON())

    const json = await response.json()

    return json
  }
}

export default new API()
