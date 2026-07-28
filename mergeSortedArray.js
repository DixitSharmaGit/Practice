function mergeArrays(arr1, arr2) {
    let mergeArray = [...arr1, ...arr2];
    return mergeArray.sort((a, b) => a - b);
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]