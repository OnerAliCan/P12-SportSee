<<<<<<< HEAD
export default function CustomCursor({ points }) {
  return (
    <rect
      className="widget-sessions__cursor"
      fill="#000000"
      opacity={0.1}
      x={points[0].x}
      height="100%"
      width="100%"
    />
  )
}
=======
import React from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  Rectangle,
} from 'recharts'

const CustomCursor = (props) => {
  const { points, width, height } = props
  const { x, y } = points[0]
  //   console.log(props)
  return (
    <Rectangle
      fill="red"
      stroke="red"
      x={x}
      y={y}
      width={width * 2}
      height={height}
    />
  )
}

export default CustomCursor
>>>>>>> 1358f8b (before test)
