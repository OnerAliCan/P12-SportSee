import '../styles/nutritional-value.scss'
import CaloriesIcon from '../assets/calories-icon.svg'
import ProtéinesIcon from '../assets/proteines-icon.svg'
import GlucidesIcon from '../assets/glucides-icon.svg'
import LipidesIcon from '../assets/lipides-icon.svg'
import NutritionalValue from './NutritionalValue.jsx'

const icons = {
  Calories: CaloriesIcon,
  Protéines: ProtéinesIcon,
  Glucides: GlucidesIcon,
  Lipides: LipidesIcon,
}

export default function NutritionalValues({ data }) {
  if (!data) {
    return <div>Chargement...</div>
  }

  const count = ['Calories', 'Protéines', 'Glucides', 'Lipides']
  const formattedData = Object.entries(data).map(([, value], index) => ({
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
        <NutritionalValue
          key={label}
          label={label}
          value={value}
          backgrounds={backgrounds}
          icons={icons}
        />
      ))}
    </div>
  )
}
