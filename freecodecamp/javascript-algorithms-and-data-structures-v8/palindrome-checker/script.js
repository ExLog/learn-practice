const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

/*Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and
turn everything into the same case (lower or upper case) in order to check for palindromes.
*/
function sanitizeText(text) {
  // remove non-alphanumeric
  let sanitized = text.replace(/[^a-zA-Z\d]/g, "");

  // turn everything to lowercase
  return sanitized.toLowerCase();
}

function checkIfPalindrome(text) {
  const reverted = [...text].reverse();
  return text === reverted.join("");
}

checkBtn.onclick = () => {
  const text = textInput.value;
  if (text === "") {
    alert("Please input a value");
    return;
  }

  if (checkIfPalindrome(sanitizeText(text))) {
    result.innerHTML = `${text} is a palindrome`;
  } else {
    result.innerHTML = `${text} is not a palindrome`;
  }
};
