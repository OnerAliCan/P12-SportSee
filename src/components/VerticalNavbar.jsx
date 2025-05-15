import React from 'react'
import yoga from '../assets/yoga.svg'
import swim from '../assets/swim.svg'
import bike from '../assets/bike.svg'
import dumbbell from '../assets/dumbbell.svg'
import '../styles/vertical-navbar.scss'

export default function VerticalNavbar() {
  return (
    <div className="vertical-navbar-container">
      <nav className="vertical-navbar">
        <div className="navbar-img-container">
          <img src={yoga} alt="" />
        </div>
        <div className="navbar-img-container">
          <img src={swim} alt="" />
        </div>
        <div className="navbar-img-container">
          <img src={bike} alt="" />
        </div>
        <div className="navbar-img-container">
          <img src={dumbbell} alt="" />
        </div>
      </nav>
      <div className="copyright">Copyright, SportSee 2020</div>
    </div>
  )
}
