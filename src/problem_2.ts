{
  /**
   * Problem 2
   * Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
   */
  type RemoveDuplicatesFunction = (numbers: number[]) => number[];

  const removeDuplicates: RemoveDuplicatesFunction = (numbers: number[]) => {
    const result: number[] = [];
    numbers.map((number: number): void => {
      if (!result.includes(number)) {
        result.push(number);
      }
    });
    return result;
  };

  const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  console.log(removeDuplicates(numbers));
}
