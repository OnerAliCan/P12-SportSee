export default function NutritionalValue({ label, value, backgrounds, icons }) {
  return (
    <div className="nutritional-value">
      <div
        className="img-background"
        style={{ backgroundColor: backgrounds[label] }}
      >
        <img src={icons[label]} alt={label} />
      </div>
      <div className="value-container">
        <div className="value">
          {value}
          {label === 'Calories' ? 'kCal' : 'g'}
        </div>
        <div className="label"> {label}</div>
      </div>
    </div>
  )
}
