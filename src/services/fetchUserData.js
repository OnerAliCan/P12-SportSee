import { apiUrl } from './apiUrl'

// Récupérer les infos principales de l’utilisateur
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

// Récupère les activités de l’utilisateur pour le nombre de sessions de sport par jour
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

// Récupère les sessions moyennes de l’utilisateur pour la durée moyenne d’entraînement par jour
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

// Récupère les performances de l’utilisateur (force, cardio, endurance, etc.)
export function getUserPerformanceData(userId) {
  return fetch(`${apiUrl}/user/${userId}/performance`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur réseau')
      }
      return response.json()
    })
    .then((data) => {
      return data.data
    })
}
