// //find the maximum count of consecutive 1's in an array
// function maxCount(arr) {
//     let maxCount = 0;
//     let currentCount = 0;
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] === 1){
//             currentCount ++;
//         } else {
//             maxCount = Math.max(maxCount, currentCount);
//             currentCount = 0;
//         }
//     }
//     return maxCount = Math.max(maxCount, currentCount);
// }
// console.log(maxCount([1, 1, 0, 1, 1, 1])); // Output: 3

// find the maximum count of consecutive 1's in an array without in built method
function maxCount(arr){
    let maxCount = 0;
    let currentCount = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            currentCount ++;
        } else {
            if(currentCount > maxCount) {
                maxCount = currentCount;
            }
            currentCount = 0;
        }
    }
    return maxCount = currentCount > maxCount ? currentCount : maxCount;
}
console.log(maxCount([1, 1, 0, 1, 1, 1])); // Output: 3