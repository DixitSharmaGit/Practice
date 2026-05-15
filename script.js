function revStr(str) {
    let arr = [ ];
    let charsArr = str.split("");
    for (let i = charsArr.length - 1; i >= 0; i--) {
        arr.push(charsArr[i]);
    }
    return arr.join("");
}
console.log(revStr("Dixit"));