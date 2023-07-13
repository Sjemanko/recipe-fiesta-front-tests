import styled from "styled-components";

export const ModalContainer = styled.div`
  display: ${props => props.isShowed ? 'absolute' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  backdrop-filter: blur(5px);
  
`;

export const ModalContentSection = styled.div`
  background-color: white ;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 65%; /* Could be more or less, depending on screen size */
  border-radius: 12px;

  & p {
    margin-left: 0.5rem;
  }
`;

export const ModalActions = styled.span`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: right;

  & button {
    background-color: #5a025a;
    color: white;
    border: none;
    padding: 4px 22px;
    font-size: 16px;
    transition-duration: 0.4s;
    text-decoration: none;
    cursor: pointer;
  }

  & button:hover {
    background-color: green;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  background-color: purple;
  justify-content: left;
  padding-left: 4%;
  items-align: center;
  color: white;
  border-radius: 8px;
`