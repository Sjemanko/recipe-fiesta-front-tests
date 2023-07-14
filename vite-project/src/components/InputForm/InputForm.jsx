import Card from "../../shared/Card/Card";
import Button from "../../shared/Button/Button";
import Form from "./Elements";
import { useState } from "react";

const InputForm = ({ onSubmitForm }) => {
  const [enteredData, setEnteredData] = useState({
    username: "",
    age: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // const userInput = {
    //   username: userData.username,
    //   age: userData.age,
    // };
    // console.log(userInput);
    onSubmitForm(enteredData);
  };

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    return setEnteredData((prevState) => ({
      ...prevState,
      [event.target.name]: value,
    }));
  };

  return (
    <Card>
      <Form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="username-id">Username</label>
          <input
            type="text"
            name="username"
            id="username-id"
            value={enteredData.username}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age-id">Age</label>
          <input
            type="number"
            name="age"
            id="age-id"
            value={enteredData.age}
            onChange={inputChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </Form>
    </Card>
  );
};

export default InputForm;
