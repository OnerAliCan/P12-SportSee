import React from 'react'
import DataContextProvider from './services/DataContext'
import Profile from './pages/Profile'

function App() {
  return (
    <DataContextProvider>
      <Profile />
    </DataContextProvider>
  )
}

export default App
