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

export function getUserActivity(userId) {
  return fetch(`${apiUrl}/user/${userId}/activity`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur réseau')
      }
      return response.json()
    })
    .then((data) => data.data.sessions)
}

export function getAverageSessions(userId) {
  return fetch(`${apiUrl}/user/${userId}/average-sessions`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur réseau')
      }
      return response.json()
    })
    .then((data) => data.data.sessions)
}

export function getUserPerformanceData(userId) {
  return fetch(`${apiUrl}/user/${userId}/performance`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur réseau')
      }
      return response.json()
    })
    .then((data) => {
      console.log('dansfetch', data.data)
      return data.data
    })
}
