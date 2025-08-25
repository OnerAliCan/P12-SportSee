import { createContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  getUserMainData,
  getUserActivity,
  getAverageSessions,
  getUserPerformanceData,
} from './fetchUserData'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../mock/mockData'

const DataContext = createContext()
export { DataContext }

function DataContextProvider({ children }) {
  const { userId } = useParams()
  const navigate = useNavigate()

  // States qui contiennent les différentes données de l’utilisateur
  const [userData, setUserData] = useState({})
  const [activityData, setActivityData] = useState([])
  const [averageSessionsData, setAverageSessionsData] = useState([])
  const [performance, setPerformance] = useState([])

  // fetch toutes les données utilisateur
  useEffect(() => {
    const numericId = parseInt(userId, 10)

    // Si l'utilisateur est dans le mock
    if ([22, 28].includes(numericId)) {
      const user = USER_MAIN_DATA.find((u) => u.id === numericId)
      const activity = USER_ACTIVITY.find(
        (a) => a.userId === numericId
      )?.sessions
      const avgSessions = USER_AVERAGE_SESSIONS.find(
        (s) => s.userId === numericId
      )?.sessions
      const perf = USER_PERFORMANCE.find((p) => p.userId === numericId)

      if (!user) {
        navigate('/404', { replace: true })
        return
      }

      setUserData(user)
      setActivityData(activity || [])
      setAverageSessionsData(avgSessions || [])
      setPerformance(perf || [])
      return
    }

    // Sinon fetch API classique

    Promise.all([
      getUserMainData(userId),
      getUserActivity(userId),
      getAverageSessions(userId),
      getUserPerformanceData(userId),
    ])
      .then(([user, activity, avgSessions, perf]) => {
        if (!user || !user.id) {
          navigate('/404', { replace: true })
          return
        }
        // Mise à jour des states avec les résultats
        setUserData(user)
        setActivityData(activity)
        setAverageSessionsData(avgSessions)
        setPerformance(perf)
      })
      .catch(() => {
        navigate('/404', { replace: true })
      })
  }, [userId, navigate])

  return (
    <DataContext.Provider
      value={{ userData, activityData, averageSessionsData, performance }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
