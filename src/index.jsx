import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'pages/App'
import Login from 'pages/Login'
import history from 'components/history'
import HistoryRouter from 'components/HistoryRouter'
import { Route, Routes } from 'react-router-dom'
import Loading from 'pages/Loading'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/app' element={<App />} />
        <Route path='*' element={<Loading />} />
      </Routes>
    </HistoryRouter>
  </React.StrictMode>
)
