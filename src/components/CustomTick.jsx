export default function CustomTick(props) {
  const { x, y, payload } = props
  return (
    <text
      x={x - 10}
      y={y + 15}
      fill="#fff"
      fontSize={12}
      opacity={0.7}
      textAnchor="middle"
    >
      {payload.value}
    </text>
  )
}
