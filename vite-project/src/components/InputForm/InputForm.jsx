import Card from "../UI/Card/Card";
import Button from "../UI/Card/Button/Button";
import { useState } from "react";
const InputForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      "username": username,
      "age": age,
    };
    props.onSubmitForm(userInput);
  };

  const inputChangeHandler = (id, value) => {
    if (id === "username") {
      setUsername(value);
    } else {
      setAge(value);
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="username-id">Username</label>
          <input
            type="text"
            name="username"
            id="username-id"
            value={username}
            onChange={(event) => {
              inputChangeHandler("username", event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="age-id">Age</label>
          <input
            type="number"
            name="age"
            id="age-id"
            value={age}
            onChange={(event) => {
              inputChangeHandler("age", event.target.value);
            }}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default InputForm;
