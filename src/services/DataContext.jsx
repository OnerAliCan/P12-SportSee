import { createContext, useContext, useState, useEffect } from 'react'
import {
  getUserMainData,
  getUserActivity,
  getAverageSessions,
  getUserPerformanceData,
} from './fetchUserData'

const DataContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useDataContext() {
  return useContext(DataContext)
}

export { DataContext }

function DataContextProvider(props) {
  const userId = 12
  // const { userId } = useParams()
  // userId = 12

  const [userData, setUserData] = useState({})
  const [activityData, setActivityData] = useState([])
  const [averageSessionsData, setAverageSessionsData] = useState([])
  const [performanceData, setPerformanceData] = useState([])

  useEffect(() => {
    Promise.all([
      getUserMainData(userId),
      getUserActivity(userId),
      getAverageSessions(userId),
      getUserPerformanceData(userId),
    ])
      .then(([user, activity, avgSessions, performance]) => {
        setUserData(user)
        setActivityData(activity)
        setAverageSessionsData(avgSessions)
        setPerformanceData(performance)
      })
      .catch((error) => {
        console.log('Error !', error)
      })
  }, [userId])
  return (
    <DataContext.Provider
      value={{
        userData,
        activityData,
        averageSessionsData,
        performanceData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
export default DataContextProvider
