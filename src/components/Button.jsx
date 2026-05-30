const Button = ({ text, onClick }) => {
  return (
    <button type="button" className="btn card-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
