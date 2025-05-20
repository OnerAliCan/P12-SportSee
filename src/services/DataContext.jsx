import { createContext, useContext, useState, useEffect } from 'react'
import {
  getUserMainData,
  getUserActivity,
  getAverageSessions,
  getUserPerformanceData,
} from './fetchUserData'
import { useParams } from 'react-router-dom'

const DataContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useDataContext() {
  return useContext(DataContext)
}

export { DataContext }

function DataContextProvider({ children }) {
  const { userId } = useParams()
  const [userData, setUserData] = useState({})
  const [activityData, setActivityData] = useState([])
  const [averageSessionsData, setAverageSessionsData] = useState([])
  const [performance, setPerformance] = useState([])

  useEffect(() => {
    getUserMainData(userId)
      .then((user) => {
        console.log('User data reçue:', user)
        setUserData(user)
      })
      .catch((error) => {
        console.error('Erreur lors du fetch de userData:', error)
      })
  }, [userId])

  useEffect(() => {
    console.log('useEffect lancé')
    Promise.all([
      getUserMainData(userId),
      getUserActivity(userId),
      getAverageSessions(userId),
      getUserPerformanceData(userId),
    ])
      .then(([user, activity, avgSessions, performance]) => {
        console.log('Données reçues:', user, activity, avgSessions, performance)
        setUserData(user)
        setActivityData(activity)
        console.log('avgSessions reçue:', avgSessions)

        setAverageSessionsData(avgSessions)
        console.log('performance reçue:', performance)
        setPerformance(performance)
      })
      .catch((error) => {
        console.log('Error !', error)
      })
  }, [userId])
  console.log('dans context', performance)

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
