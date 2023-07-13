export const IsAgeValid = (userInput) => {
  return userInput > 0 ? true : false ;
};

export const IsObjectValid = (userInput) => {
  for (let key in userInput) {
    if (userInput[key] === "") {
      return false;
    }
  }
  return true;
};
