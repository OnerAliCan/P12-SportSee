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

export default function DailyActivity({ activityData }) {
  const dailyActivity = [...activityData]

  const activityDayNumbers = activityData.map((item, index) => ({
    ...item,
    day: index + 1,
  }))

  const kilos = dailyActivity.map((d) => d.kilogram)
  const minKilo = Math.min(...kilos) - 5
  const maxKilo = Math.max(...kilos) + 1

  return (
    <div className="daily-activity">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={activityDayNumbers}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barGap={8}
        >
          <text
            x={30}
            y={25}
            textAnchor="left"
            style={{
              fontSize: '0.9rem',
              fontWeight: 500,
              fill: '#000000',
            }}
          >
            Activité quotidienne
          </text>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: '#DEDEDE' }}
            tick={{ stroke: '#9B9EAC', fontWeight: '400' }}
          />
          <YAxis
            yAxisId="left"
            domain={[minKilo, 'auto']}
            orientation="right"
            dataKey="kilogram"
          />
          <YAxis yAxisId="right" orientation="left" dataKey="calories" hide />
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{
              paddingBottom: '1em',
            }}
          />
          <Bar
            yAxisId="left"
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="right"
            name="Calories brûlées (kCal)"
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
