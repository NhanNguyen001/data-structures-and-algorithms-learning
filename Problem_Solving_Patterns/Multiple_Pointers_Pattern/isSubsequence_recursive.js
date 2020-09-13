const isSubsequence = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sing")); // true
console.log(isSubsequence("abc", "abdracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)