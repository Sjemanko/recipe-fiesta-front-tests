import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import ResultTable from "./components/ResultTable/ResultTable";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { IsObjectValid, IsAgeValid } from "./utils/IsValid";

function App() {
  const [isShowed, setIsShowed] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [userData, setUserData] = useState([]);

  const processUserInput = (userInput) => {
    if (!IsObjectValid(userInput)) {
      setErrorMessage([
        "Empty Input",
        "Please try to enter all required data.",
      ]);
      return setIsShowed(true);
    }
    if (!IsAgeValid(parseInt(userInput.age))) {
      setErrorMessage(["Invalid Age Input", "Please enter age > 0."]);
      return setIsShowed(true);
    }
    setIsShowed(false);
    setUserData((prevState) => [...prevState, userInput]);
  };

  let isUserDataEmpty = userData.length === 0 ? true : false;

  return (
    <div>
      <Modal
        showed={isShowed}
        closeModal={() => setIsShowed(false)}
        errorMessage={errorMessage}
      />
      <InputForm onSubmitForm={processUserInput} />
      {!isUserDataEmpty && <ResultTable userData={userData} />}
    </div>
  );
}

export default App;
