import '../styles/average-duration.scss'
import CustomActiveDot from './CustomActiveDot'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useEffect, useState } from 'react'
import { getAverageSessions } from '../services/fetchUserData'
const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

export default function AverageDuration({ userId }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getAverageSessions(userId).then((sessions) => {
      const formatted = sessions.map((session) => ({
        ...session,
        day: week[session.day - 1],
      }))

      setData(formatted)
    })
  }, [userId])

  const maxSessionLength = Math.max(...data.map((d) => d.sessionLength))
  return (
    <div className="average-duration">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="10%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <YAxis type="number" domain={[0, maxSessionLength]} hide="true" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#fff', fontSize: 12, opacity: 0.6 }}
            interval="preserveStartEnd"
          />
          <Tooltip cursor={true} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#colorLine)"
            strokeWidth={2}
            dot={false}
            activeDot={<CustomActiveDot />}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
