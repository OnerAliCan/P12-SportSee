import React from 'react'
import DataContextProvider from './services/DataContext'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/user/:userId"
          element={
            <DataContextProvider>
              <Profile />
            </DataContextProvider>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
