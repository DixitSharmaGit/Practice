function revStr2(str) {
    let arr = new Array(str.length);
    let charsArr = str.split("");
    let left = 0;
    let right = charsArr.length - 1;

    while (left <= right) {
        arr[left] = charsArr[right];
        arr[right] = charsArr[left];
        left++;
        right--;
    }

    return arr.join("");
    

}
console.log(revStr2("Dixit"));