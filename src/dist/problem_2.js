"use strict";
{
    const removeDuplicates = (numbers) => {
        const result = [];
        numbers.map((number) => {
            if (!result.includes(number)) {
                result.push(number);
            }
        });
        return result;
    };
    const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    console.log(removeDuplicates(numbers));
}
