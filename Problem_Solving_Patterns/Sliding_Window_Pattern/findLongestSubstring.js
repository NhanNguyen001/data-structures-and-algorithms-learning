const findLongestSubstring = (string) => {
  if (string.length === 0) return 0;
  let longest = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }

  return longest;
};

// console.log(findLongestSubstring(''));
// findLongestSubstring('bbbbbb');
console.log(findLongestSubstring('thiisiawesome'));
// findLongestSubstring('rithmschool');
