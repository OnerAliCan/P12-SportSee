// src/services/fetchUserData.js
import { USER_ACTIVITY } from '../mock/mockData.js'

export function getUserActivity(userId) {
  return new Promise((resolve) => {
    const user = USER_ACTIVITY.find((item) => item.userId === userId)
    resolve(user?.sessions || [])
  })
}
