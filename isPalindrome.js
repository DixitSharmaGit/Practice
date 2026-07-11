// // with inbuilt methods
// function isPalindrome(str) {
//   let revStre = str.split("").reverse().join("");
//   if (str === revStre) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome(" om"));// false

// without inbuilt methods
function isPalindrome(str) {
  const len = str.length;
  for (i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
    return true;
  }
}
console.log(isPalindrome("madam")); // true
