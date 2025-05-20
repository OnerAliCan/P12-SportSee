import React from 'react'
import { useDataContext } from '../services/DataContext'
import UserName from '../components/UserName'
import HorizontalNavbar from '../components/HorizontalNavbar'
import VerticalNavbar from '../components/VerticalNavbar'
import DailyActivity from '../components/DailyActivity'
import AverageDuration from '../components/AverageDuration'
import Stats from '../components/Stats'
import Score from '../components/Score'
import NutritionalValue from '../components/NutritionalValue'
import '../styles/main.scss'

export default function Dashboard() {
  const { userData, activityData, averageSessionsData, performance } =
    useDataContext()
  console.log('dans profile', performance.data)
  const performanceData = performance.data
  return (
    <div className="app">
      <HorizontalNavbar />
      <div className="horizontal-navbar-user-infos-container">
        <VerticalNavbar />
        <div className="user-infos">
          <UserName firstName={userData?.userInfos?.firstName} />
          <div className="user-stats">
            <div className="curves">
              <DailyActivity activityData={activityData} />
              <div className="small-curves">
                <AverageDuration averageSessionsData={averageSessionsData} />
                <Stats performanceData={performanceData} />
                <Score score={userData.todayScore ?? userData.score} />
              </div>
            </div>
            <div className="nutritional-values-container">
              <NutritionalValue data={userData.keyData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
