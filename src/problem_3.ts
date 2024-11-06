{
  /**
   * Problem 3
   * Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
   */

  type Sentence = string;
  type Word = string;
  type CountWordOccurrencesFunction = (
    sentence: Sentence,
    word: Word
  ) => number;

  const countWordOccurrences: CountWordOccurrencesFunction = (
    sentence: Sentence,
    word: Word
  ) => {
    const sentenceLower = sentence.toLowerCase();
    const wordLower = word.toLowerCase();
    // I use a regular expression to split with non-word characters. becouse I don't want to count the spaces and other characters.
    const sentenceOnlyWord = sentenceLower.split(/\W+/);

    const count = sentenceOnlyWord.filter(
      (word: string): boolean => word === wordLower
    );
    return count.length;
  };

  // output: 1
  const sentence: Sentence = "TypeScript is great. I love TypeScript!";
  const word: Word = "TypeScript";
  console.log(countWordOccurrences(sentence, word));

  // Output: 2
  const result = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "LOVE"
  );
  console.log(result);
}
