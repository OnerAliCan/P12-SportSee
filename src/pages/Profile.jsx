import React from 'react'
import { useDataContext } from '../hooks/useDataContext'
import UserName from '../components/UserName'
import HorizontalNavbar from '../components/HorizontalNavbar'
import VerticalNavbar from '../components/VerticalNavbar'
import DailyActivity from '../components/DailyActivity'
import AverageDuration from '../components/AverageDuration'
import Stats from '../components/Stats'
import Score from '../components/Score'
import NutritionalValues from '../components/NutritionalValues'
import '../styles/main.scss'
import { Navigate } from 'react-router-dom'

export default function Profile() {
  const {
    userData,
    activityData,
    averageSessionsData,
    performance,
    userNotFound,
  } = useDataContext()
  const performanceData = performance?.data || []

  if (userNotFound) {
    return <Navigate to="/404" replace />
  }

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
              <NutritionalValues data={userData.keyData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
