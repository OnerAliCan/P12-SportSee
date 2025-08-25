import { createContext, useState, useEffect } from 'react'
import {
  getUserMainData,
  getUserActivity,
  getAverageSessions,
  getUserPerformanceData,
} from './fetchUserData'
import { useParams } from 'react-router-dom'

const DataContext = createContext()

export { DataContext }

function DataContextProvider({ children }) {
  const { userId } = useParams()

  // States qui contiennent les différentes données de l’utilisateur
  const [userData, setUserData] = useState({})
  const [activityData, setActivityData] = useState([])
  const [averageSessionsData, setAverageSessionsData] = useState([])
  const [performance, setPerformance] = useState([])

  // fetch toutes les données utilisateur
  useEffect(() => {
    Promise.all([
      getUserMainData(userId),
      getUserActivity(userId),
      getAverageSessions(userId),
      getUserPerformanceData(userId),
    ])
      .then(([user, activity, avgSessions, performance]) => {
        // Mise à jour des states avec les résultats
        setUserData(user)
        setActivityData(activity)
        setAverageSessionsData(avgSessions)
        setPerformance(performance)
      })
      .catch((error) => {
        console.error('Erreur lors du fetch des données utilisateur:', error)
      })
  }, [userId])

  return (
    <DataContext.Provider
      value={{
        userData,
        activityData,
        averageSessionsData,
        performance,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
