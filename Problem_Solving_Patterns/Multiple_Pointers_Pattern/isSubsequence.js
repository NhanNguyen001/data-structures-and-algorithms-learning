const isSubsequence = (str1, str2) => {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sing")); // true
console.log(isSubsequence("abc", "abdracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
