import '../styles/nutritional-value.scss'
import CaloriesIcon from '../assets/calories-icon.svg'
import ProtéinesIcon from '../assets/proteines-icon.svg'
import GlucidesIcon from '../assets/glucides-icon.svg'
import LipidesIcon from '../assets/lipides-icon.svg'

const icons = {
  Calories: CaloriesIcon,
  Protéines: ProtéinesIcon,
  Glucides: GlucidesIcon,
  Lipides: LipidesIcon,
}

export default function NutritionalValue({ data }) {
  if (!data) {
    return <div>Chargement...</div>
  }

  const count = ['Calories', 'Protéines', 'Glucides', 'Lipides']
  const formattedData = Object.entries(data).map(([key, value], index) => ({
    label: count[index],
    value: value,
  }))

  const backgrounds = {
    Calories: '#fbeaea',
    Protéines: '#e9f4fb',
    Glucides: '#faf6e5',
    Lipides: '#fbeaef',
  }

  return (
    <div className="nutritional-values-container">
      {formattedData.map(({ label, value }) => (
        <div className="nutritional-value" key={label}>
          <div
            className="img-background"
            style={{ backgroundColor: backgrounds[label] }}
          >
            <img src={icons[label]} alt={label} />
          </div>
          <div className="value-container">
            <div className="value"> {value}kCal</div>
            <div className="label"> {label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
