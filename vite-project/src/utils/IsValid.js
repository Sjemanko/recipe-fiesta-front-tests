export const isAgeValid = (userInput) => {
  return userInput > 0;
};

export const isObjectValid = (userInput) => {
  for (const key in userInput) {
    if (userInput[key] === "") {
      return false;
    }
  }
  return true;
};
