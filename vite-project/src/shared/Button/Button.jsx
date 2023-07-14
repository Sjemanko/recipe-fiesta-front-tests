import StyledButton from "./Elements";

const Button = ({onClick, children}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
