import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Header } from './components'
import { Home } from './scenes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <div className="main">
      <Header />
      <Route path="/" component={Home} exact />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
