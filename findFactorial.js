function factorial(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;//result=result*1
    }
    return result
}
console.log(factorial(5))//120