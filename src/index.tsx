import './index.css'

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Header } from './components'
import { Home } from './scenes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Header />
      <Route component={Home} />
    </Fragment>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
