// function factorial(num){
//     let result = 1;
//     for(let i = 1; i <= num; i++){
//         result *= i;//result=result*1
//     }
//     return result
// }
// console.log(factorial(5))//120

// without in built method
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5))//120