"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const sentenceLower = sentence.toLowerCase();
        const wordLower = word.toLowerCase();
        // I use a regular expression to split with non-word characters. becouse I don't want to count the spaces and other characters.
        const sentenceOnlyWord = sentenceLower.split(/\W+/);
        const count = sentenceOnlyWord.filter((word) => word === wordLower);
        return count.length;
    };
    // output: 1
    const sentence = "TypeScript is great. I love TypeScript!";
    const word = "TypeScript";
    console.log(countWordOccurrences(sentence, word));
    // Output: 2
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "LOVE");
    console.log(result);
}
