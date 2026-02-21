const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-dark-200 shadow-card ${
        hover ? 'hover:shadow-hover transition-shadow duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
