import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
      <h1>Error 404 : Page not found</h1>
      <Link to="/">Retour à l'accueil</Link>
    </>
  )
}
