import '../styles/score.scss'

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

export default function Score({ score }) {
  if (!score) {
    return null
  }

  const data = [
    {
      name: 'rest',
      background: 100,
      percentage: 100 - score * 100,
      fill: '#ffffff',
    },
    {
      name: 'score',
      percentage: score * 100,
      fill: '#FF0000',
    },
  ]

  return (
    <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={900}
          height={300}
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="70%"
          barSize={10}
          data={data}
          startAngle={-270}
          endAngle={90}
        >
          <text
            x={30}
            y={24}
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: 15, fontWeight: 'bold', fill: '#000' }}
          >
            Score
          </text>
          <RadialBar
            minAngle={15}
            background
            clockWise={false}
            dataKey="percentage"
            cornerRadius={10}
            fill="#FF0000"
          />
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: 24, fontWeight: 'bold', fill: '#000' }}
          >
            {score * 100}%
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: 15, fontWeight: 'bold', fill: '#74798C' }}
          >
            <tspan x="50%" dy="0">
              de votre
            </tspan>
            <tspan x="50%" dy="1.2em">
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
