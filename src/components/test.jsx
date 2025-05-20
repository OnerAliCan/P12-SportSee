import { useEffect } from 'react'
import { apiUrl } from '../services/apiUrl'

function TestFetch() {
  useEffect(() => {
    fetch(`${apiUrl}/user/12`) // remplace 12 par un ID existant dans ton backend
      .then((res) => {
        if (!res.ok) throw new Error('Erreur de fetch')
        return res.json()
      })
      .then((data) => {
        console.log('Données reçues:', data)
      })
      .catch((err) => console.error(err))
  }, [])

  return <div>Check la console pour voir les données fetchées</div>
}

export default TestFetch
