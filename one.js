//Find the Longest Word in a Sentence//
function findLongestWord(sentence){
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
console.log(findLongestWord("Hello i am Dixit,,,,, "));