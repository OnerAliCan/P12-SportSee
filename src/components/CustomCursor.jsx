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
