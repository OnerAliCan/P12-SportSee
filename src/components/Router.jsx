import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import ErrorPage from '../pages/ErrorPage'
import DataContextProvider from '../services/DataContext'

export default function RouterConfig() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route
        path="user/:userId"
        element={
          <DataContextProvider>
            <Profile />
          </DataContextProvider>
        }
      />

      <Route path="404" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
