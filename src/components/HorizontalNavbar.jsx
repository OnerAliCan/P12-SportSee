import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/horizontal-navbar.scss'

export default function HorizontalNavbar() {
  return (
    <div className="horizontal-navbar-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className="horizontal-navbar">
        <a href="/">Accueil</a>
        <a href="/">Profil</a>
        <a href="/">Réglage</a>
        <a href="/">Communauté</a>
      </nav>
    </div>
  )
}
