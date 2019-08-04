import './results.scss'

import React, { FunctionComponent, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'

import { Loading, Result } from '../components'
import { useStoreActions, useStoreState } from '../store'

const Results: FunctionComponent<RouteComponentProps> = ({ location }) => {
  const { search } = useStoreActions(actions => actions.results)
  const { loading, results } = useStoreState(state => state.results)

  useEffect(() => {
    const params = new URLSearchParams(location.search.slice(1))

    const query = params.get('query')

    if (query) {
      search(query)
    }
  }, [location.search, search])

  if (loading) {
    return <Loading />
  }

  return (
    <main className="results">
      {results.map((result, index) => (
        <Result key={index} result={result} />
      ))}
    </main>
  )
}

export default Results
