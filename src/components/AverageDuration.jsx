import '../styles/average-duration.scss'
import CustomCursor from './CustomCursor/'
import CustomTooltip from './CustomTooltip/'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

export default function AverageDuration({ averageSessionsData }) {
  // Formatage des jours numériques en lettres
  const formattedDays = averageSessionsData.map((item) => ({
    ...item,
    day: week[item.day - 1],
  }))

  // Création de points fictifs au début et à la fin pour "étirer" le graphique
  const firstPoint = { ...formattedDays[0], day: '' }
  const lastPoint = { ...formattedDays[formattedDays.length - 1], day: '' }

  // Tableau final avec les points fictifs ajoutés
  const formattedDaysWithEdges = [firstPoint, ...formattedDays, lastPoint]

  return (
    <div className="average-duration">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedDaysWithEdges}
          margin={{ top: 0, right: 0, left: 0, bottom: 30 }}
        >
          {/* Définition d’un dégradé pour la ligne */}
          <defs>
            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
            </linearGradient>
          </defs>

          <Legend
            verticalAlign="top"
            align="center"
            content={() => (
              <p className="chart-title">Durée moyenne des sessions</p>
            )}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#FFFFFF', fillOpacity: '50%' }}
            stroke="#FFFFFF"
            tickMargin={10}
            interval={0}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            dataKey="sessionLength"
            hide={true}
            domain={['dataMin -20', 'dataMax + 50']}
          />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="url(#lineGradient)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              stroke: '#FFFFFF',
              strokeOpacity: '50%',
              strokeWidth: 10,
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
