/**
 * @description Represents a reusable button component.
 *
 * @param {Object} props - The properties object for the Button component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {function} props.handleClick - The callback function to be invoked when the button is clicked.
 * @returns {React.ReactNode} A button element with specified properties.
 */
const Button = ({ className = "", children, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
