const fizzbuzz = require('./fizzbuzz');  // Import the fizzbuzz function

describe('fizzbuzz function tests', () => {
    // Define test cases in an array of objects
    const testCases = [
        { input: 3, expected: 'Fizz' },
        { input: 6, expected: 'Fizz' },
        { input: 9, expected: 'Fizz' },
        { input: 5, expected: 'Buzz' },
        { input: 10, expected: 'Buzz' },
        { input: 20, expected: 'Buzz' },
        { input: 15, expected: 'FizzBuzz' },
        { input: 30, expected: 'FizzBuzz' },
        { input: 1, expected: 1 },
        { input: 2, expected: 2 },
        { input: 4, expected: 4 },
    ];

    // Iterate over the test cases
    testCases.forEach(({ input, expected }) => {
        test(`returns ${expected} when input is ${input}`, () => {
            expect(fizzbuzz(input)).toBe(expected);
        });
    });
});
