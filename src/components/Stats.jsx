import '../styles/stats.scss'
import { getUserPerformanceData } from '../services/fetchUserData'
import { useEffect, useState } from 'react'

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Polygon,
} from 'recharts'

export default function Stats({ performanceData }) {
  const kindTranslate = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  }

  const formattedData = performanceData
    .map((dataPoint) => ({
      ...dataPoint,
      kind: kindTranslate[dataPoint.kind],
    }))
    .reverse()

  return (
    <div className="stats">
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <RadarChart data={formattedData} outerRadius="65%">
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            stroke="#FFFFFF"
            tick={{ fontSize: '0.6rem', fontWeight: '500' }}
          />
          <PolarGrid stroke="#FFFFFF" radialLines={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity="70%" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
