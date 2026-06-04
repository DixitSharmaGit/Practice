function firstNonRepeat(str) {
  let count = {};

  // Step 1: Count each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  // Step 2: Find first character with count 1
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }

  return null; // no unique character found
}

console.log(firstNonRepeat("aabbcdef"));  // "c"
console.log(firstNonRepeat("javascript")); // "j"
console.log(firstNonRepeat("aabb"));       // null