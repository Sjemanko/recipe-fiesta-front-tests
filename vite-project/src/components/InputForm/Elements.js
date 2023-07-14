import styled from "styled-components";

const Form = styled.form`
  & div {
    display: flex;
    flex-direction: column;
    margin: 0 0 2% 0;
  }

  & label {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 1.5% 0;
  }

  & input {
    border: 2px solid grey;
    border-radius: 2px;
    -webkit-transition: 0.5;
    transition: 0.5s;
    outline: none;
    height: 24px;
    font-size: 20px;
  }

  & input:focus {
    border: 2px solid black;
  }
`;

export default Form;
