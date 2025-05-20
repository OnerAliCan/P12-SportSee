import { USER_MAIN_DATA } from '../mock/mockData'
import { USER_ACTIVITY } from '../mock/mockData.js'
import { USER_AVERAGE_SESSIONS } from '../mock/mockData.js'
import { USER_PERFORMANCE } from '../mock/mockData.js'

export function getUserMainData(userId) {
  console.log(userId)

  return new Promise((resolve) => {
    const user = USER_MAIN_DATA.find((item) => item.id === userId)
    resolve(user || {})
  })
}

export function getUserActivity(userId) {
  return new Promise((resolve) => {
    const user = USER_ACTIVITY.find((item) => item.userId === userId)
    resolve(user?.sessions || [])
  })
}

export function getAverageSessions(userId) {
  return new Promise((resolve) => {
    const user = USER_AVERAGE_SESSIONS.find((item) => item.userId === userId)
    resolve(user?.sessions || [])
  })
}

export function getUserPerformanceData(userId) {
  return new Promise((resolve) => {
    const user = USER_PERFORMANCE.find((item) => item.userId === userId)
    resolve(user?.data)
  })
}
