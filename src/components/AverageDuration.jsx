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
  const formattedDays = averageSessionsData.map((item) => ({
    ...item,
    day: week[item.day - 1],
  }))

  return (
    <div className="average-duration">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedDays}
          margin={{ top: 0, right: 25, left: 25, bottom: 30 }}
        >
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
