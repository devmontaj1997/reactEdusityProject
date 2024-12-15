import "./Button.css";
// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <>
      <div className="buttonBtn">
        <button>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
