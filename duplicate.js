// function removeDuplicates(arr) {
// //     const uniqueArr = [...new Set(arr)];
// //     return uniqueArr;
// // }
// // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// function removeDuplicates(arr) {
//     const uniqueArr = [];
//     arr.forEach(element => {
//         if (!uniqueArr.includes(element)) {
//             uniqueArr.push(element);
//         }
//     });
//     return uniqueArr;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// Without inbuilt methods
function removeDuplicates(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]