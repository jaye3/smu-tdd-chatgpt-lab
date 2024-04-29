const fizzbuzz = require('./fizzbuzz');  // Import the fizzbuzz function

describe('fizzbuzz function invalid parameter tests', () => {
    // Define test cases for various invalid inputs
    const testCases = [
        { input: undefined, expected: null },
        { input: null, expected: null },
        { input: 'string', expected: null },
        { input: {}, expected: null },
        { input: [], expected: null },
        { input: true, expected: null }
    ];

    // Iterate over each test case
    testCases.forEach(({ input, expected }) => {
        test(`returns ${expected} when input is ${typeof input === 'string' ? `"${input}"` : String(input)}`, () => {
            expect(fizzbuzz(input)).toBe(expected);
        });
    });
});
