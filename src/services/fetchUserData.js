import { USER_ACTIVITY } from '../mock/mockData.js'
import { USER_AVERAGE_SESSIONS } from '../mock/mockData.js'

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
