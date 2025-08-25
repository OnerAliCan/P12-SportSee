import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
      <Link to="/user/12">User 12 (API)</Link>
      <Link to="/user/18">User 18 (API)</Link>
      <Link to="/user/22">User 22 (Mockée)</Link>
      <Link to="/user/28">User 28 (Mockée)</Link>
      <Link to="/user/404">Error 404 Test</Link>
    </div>
  )
}
