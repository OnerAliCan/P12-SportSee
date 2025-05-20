import { USER_MAIN_DATA } from '../mock/mockData'
import { USER_ACTIVITY } from '../mock/mockData.js'
import { USER_AVERAGE_SESSIONS } from '../mock/mockData.js'
import { USER_PERFORMANCE } from '../mock/mockData.js'
import { apiUrl } from './apiUrl'

export function getUserMainData(userId) {
  return fetch(`${apiUrl}/user/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur réseau')
      }
      return response.json()
    })
    .then((data) => data.data)
}

getUserMainData(12).then((userData) => {
  console.log('dans fetch', userData) // ici tu as l’objet utilisateur
})

// export async function getUserMainData(userId) {
//   try {
//     const response = await fetch(`${apiUrl}/user/${userId}`)
//     if (!response.ok) {
//       throw new Error('Erreur lors du chargement des données utilisateur')
//     }
//     const result = await response.json()
//     return result.data
//   } catch (error) {
//     console.error('Erreur getUserMainData:', error)
//     return null
//   }
// }

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
