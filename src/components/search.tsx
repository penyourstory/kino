import './search.scss'

import React, { FunctionComponent, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

const Search: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [query, setQuery] = useState('')

  return (
    <form
      className="search"
      onSubmit={event => {
        event.preventDefault()

        if (query) {
          history.push(`/search?query=${query}`)
        }
      }}
    >
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
      />
    </form>
  )
}

export default withRouter(Search)
