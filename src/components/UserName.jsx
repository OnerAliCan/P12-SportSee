import React from 'react'

export default function UserName({ firstName }) {
  return (
    <div className="user-greeting">
      <h1>
        Bonjour <span>{firstName || '...'}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
