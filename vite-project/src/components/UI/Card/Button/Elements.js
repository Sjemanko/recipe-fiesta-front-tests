import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #5a025a;
  color: white;
  border: none;
  text-decoration: none;
  display: inline-block;
  padding: 4px 22px;
  font-size: 16px;
  transition-duration: 0.4s;
  margin-top: 2%;

  &:hover {
    background-color: green;
  }
`;

export default StyledButton;
