"use strict";
{
    /**
     * Problem 1
     * Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
     */
    function sumArray(numbers) {
        return numbers.reduce((a, b) => a + b, 0);
    }
    const numbers = [1, 2, 3, 4, 5];
    console.log(sumArray(numbers));
}
