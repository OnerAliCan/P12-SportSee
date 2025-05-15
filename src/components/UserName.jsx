import React from 'react'
import '../styles/user-infos.scss'

import { USER_MAIN_DATA } from '../mock/mockData'

export default function UserName() {
  const user = USER_MAIN_DATA[0]

  return (
    <div className="user-greeting">
      <h1>
        Bonjour{' '}
        <span className="user-first-name">{user.userInfos.firstName}</span>
      </h1>
      <p className="congratulations">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  )
}
