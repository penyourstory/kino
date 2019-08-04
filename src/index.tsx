import './index.scss'

import { StoreProvider } from 'easy-peasy'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Header } from './components'
import { Home, Results } from './scenes'
import * as serviceWorker from './serviceWorker'
import { store } from './store'

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <div className="main">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Results} />
      </div>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
