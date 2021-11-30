// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str: string) {
  let ans: string = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    const charCodeShifted = charCode - 13;

    // if charCode is below 65 (mostly symbols)
    // ignore
    if (charCode < 65) {
      ans += String.fromCharCode(charCode);
      continue;
    }

    // if shifted alphabet is below 65
    if (charCodeShifted < 65) {
      for (let i = 0; i < 13; i++) {
        charCode--;
        if (charCode < 65) {
          charCode = 90;
        }
      }

      ans += String.fromCharCode(charCode);
    } else {
      ans += String.fromCharCode(charCodeShifted);
    }
  }

  return ans;
}

console.log(rot13("SERR CVMMN!"));
