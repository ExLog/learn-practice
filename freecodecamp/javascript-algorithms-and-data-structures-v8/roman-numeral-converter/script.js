const convertBtn = document.querySelector("#convert-btn");
const numberInput = document.querySelector("#number");
const output = document.querySelector("#output");

const ROMAN_NUMERALS = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToNumeral(num) {
  let result = "";

  let temp = num;
  while (temp != 0) {
    for (const [key, value] of Object.entries(ROMAN_NUMERALS)) {
      if (temp - value < 0) continue;

      result += key;
      temp -= value;
      break;
    }
  }

  return result;
}

convertBtn.onclick = () => {
  const num = numberInput.value;

  if (num === "") {
    output.innerHTML = "Please enter a valid number";
    return;
  }

  if (parseInt(num) < 0) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  }

  if (parseInt(num) >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  }

  output.innerHTML = convertToNumeral(parseInt(num));
};
