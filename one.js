//Find the Longest Word in a Sentence//
function findLongestWord(sentence){
    if (sentence.length <= 0){
        return false;
    }
    const cleanedSentence = sentence.replace(/[^a-zA-Z0-9 ]/g, "");
    const words = cleanedSentence.split(" ");
    let longestWord = " ";
    for(let word of words){
        if (word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("hello world! This is a test sentence.")); // Output: "sentence"