function isPalindrome(str) {
  let revStre = str.split("").reverse().join("");
  if (str === revStre) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(" om"));// false
