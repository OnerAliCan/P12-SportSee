import React from 'react'
import '../styles/user-infos.scss'

export default function UserName({ firstName }) {
  return (
    <div className="user-greeting">
      <h1>
        Bonjour <span className="user-first-name">{firstName || '...'}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
