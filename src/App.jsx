import history from 'components/history'
import HistoryRouter from 'components/HistoryRouter'
import NavigationBar from 'components/NavigationBar'
import File from 'pages/File'
import Loading from 'pages/Loading'
import Login from 'pages/Login'
import Net from 'pages/Net'
import Overview from 'pages/Overview'
import Process from 'pages/Process'
import Settings from 'pages/Settings'
import User from 'pages/User'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <HistoryRouter history={history}>
      <NavigationBar />
      <Routes>
        <Route path='overview' element={<Overview />} />
        <Route path='process' element={<Process />} />
        <Route path='file' element={<File />} />
        <Route path='net' element={<Net />} />
        <Route path='settings' element={<Settings />} />
        <Route path='user' element={<User />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Loading />} />
      </Routes>
    </HistoryRouter>
  )
}

export default App
