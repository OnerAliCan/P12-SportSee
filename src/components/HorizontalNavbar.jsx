import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/horizontal-navbar.scss'

export default function HorizontalNavbar() {
  return (
    <div className="horizontal-navbar-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo SportSee" />
        </Link>
      </div>
      <div className="navbar-container">
        <nav className="horizontal-navbar">
          <Link to="/">Accueil</Link>
          <Link to="/user/18">Profil</Link>
          <Link to="/">Réglage</Link>
          <Link to="/">Communauté</Link>
        </nav>
      </div>
    </div>
  )
}
