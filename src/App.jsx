import React from 'react'
import UserName from './components/UserName'
import HorizontalNavbar from './components/HorizontalNavbar'
import VerticalNavbar from './components/VerticalNavbar'
import DailyActivity from './components/DailyActivity'
import AverageDuration from './components/AverageDuration'
import Stats from './components/Stats'
import Score from './components/Score'
import NutritionalValue from './components/NutritionalValue'
import './styles/main.scss'
import { BarChart } from 'recharts'

console.log(BarChart)

function App() {
  return (
    <div className="app">
      <HorizontalNavbar />
      <div className="horizontal-navbar-user-infos-container">
        <VerticalNavbar />
        <div className="user-infos">
          <UserName />
          <div className="user-stats">
            <div className="curves">
              <DailyActivity userId={12} />
              <div className="small-curves">
                <AverageDuration />
                <Stats />
                <Score />
              </div>
            </div>
            <div className="nutritional-values-container">
              <NutritionalValue />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
