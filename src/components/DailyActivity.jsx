import '../styles/daily-activity.scss'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { useEffect, useState } from 'react'
import { getUserActivity } from '../services/fetchUserData'

export default function DailyActivity({ userId }) {
  const [data, setData] = useState([])

  const kilos = data.map((d) => d.kilogram)
  const minKilo = Math.min(...kilos) - 1
  const maxKilo = Math.max(...kilos) + 1

  useEffect(() => {
    getUserActivity(userId).then((sessions) => {
      const formatted = sessions.map((session, index) => ({
        ...session,
        day: index + 1,
      }))
      setData(formatted)
    })
  }, [userId])

  return (
    <div className="daily-activity">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis
            yAxisId="left"
            domain={[minKilo, maxKilo]}
            orientation="right"
            dataKey="kilogram"
          />
          <YAxis yAxisId="right" orientation="left" dataKey="calories" hide />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
