const CustomTooltip = ({ active, payload }) => {
  if (active && payload.length) {
    return (
      <div
        style={{
          background: '#FFFFFF',
          color: '#000000',
          padding: '1px',
          textAlign: 'center',
          fontSize: '10px',
          fontWeight: '500',
          width: '40px',
        }}
      >
        <p>{payload[0].value} min</p>
      </div>
    )
  }
}

export default CustomTooltip
