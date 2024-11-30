

const Card = ({ children, className })  => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>
  )
}

export default Card
