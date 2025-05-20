const CustomActiveDot = (props) => {
  const { cx, cy } = props
  if (cx === undefined || cy === undefined) return null
  return <circle cx={cx} cy={cy} r={6} fill="#FFF" stroke="none" />
}
export default CustomActiveDot
