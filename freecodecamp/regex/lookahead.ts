let sampleWord = "bana12";
let pwRegex = /(?=\w{6,})(?=\D*\d{2,})/;
let result = pwRegex.test(sampleWord);

console.log(result);
