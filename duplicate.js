function removeDuplicates(arr) {
    const uniqueArr = [...new Set(arr)];
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]