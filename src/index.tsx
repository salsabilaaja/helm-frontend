import React from "react"
import ReactDOM from "react-dom"
import "./styles/tailwind.css"
import "./assets/scss/styles.scss"
import * as serviceWorker from "./serviceWorker"
import router from './static/router'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'

import CCNHeader from "./components/main/CCNHeader"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <CCNHeader />
        <Routes>
          {router.map((data) => (
            <Route key={data.id} path={data.path} element={<data.element />} />
          ))}
        </Routes>
      </Router>
    </Provider >
  </React.StrictMode>
, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
