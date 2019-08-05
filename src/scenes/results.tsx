import './results.scss'

import React, { FunctionComponent, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'

import { Loading, Result } from '../components'
import { useStoreActions, useStoreState } from '../store'

const Results: FunctionComponent<RouteComponentProps> = ({ location }) => {
  const [query, setQuery] = useState('')

  const { search } = useStoreActions(actions => actions.results)
  const { loading, results } = useStoreState(state => state.results)

  useEffect(() => {
    const params = new URLSearchParams(location.search.slice(1))

    const query = params.get('query')

    if (query) {
      setQuery(query)

      search(query)
    }
  }, [location.search, search])

  if (loading) {
    return <Loading />
  }

  return (
    <main className="results">
      <h1>Search results for &#34;{query}&#34;</h1>
      <section>
        {results.map((result, index) => (
          <Result key={index} result={result} />
        ))}
      </section>
    </main>
  )
}

export default Results
