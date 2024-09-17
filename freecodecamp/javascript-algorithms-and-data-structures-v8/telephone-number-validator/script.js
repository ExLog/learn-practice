const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const result = document.querySelector("#results-div");

clearBtn.onclick = () => {
  result.innerHTML = "";
};

checkBtn.onclick = () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  const regex = new RegExp(
    "^(^1 ?)?(\\(\\d{3}\\)|\\d{3})[- ]?\\d{3}[- ]?\\d{4}$",
  );
  const valid = regex.test(userInput.value);

  result.innerHTML = `${valid ? "Valid" : "Invalid"} US number: ${userInput.value}`;
};
