// const charCount = (str) => {
//   // make object to return at end
//   var result = {};

//   // loop over string, for each character...
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     // if the char is a number/letter AND is a key in object, add one to count
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       }
//       // if the char is a number/letter AND not in object, add it to object and set value to 1
//       else {
//         result[char] = 1;
//       }
//     }
//   }

//   // if character is something else (space, period, etc.) don't do anything
//   //return object at end
//   return result;
// };

const charCount = (str) => {
  var obj = {};
  for (var char in str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

const isAlphaNumeric = (char) => {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 47 && code < 58) && // upper alpha (A-Z)
    !(code > 47 && code < 58) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
};

console.log(charCount("Nhan Nguyen"));

console.log("A".toLocaleLowerCase());
