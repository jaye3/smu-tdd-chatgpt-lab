const fizzbuzz = require('./fizzbuzz');  // Import the fizzbuzz function

describe('fizzbuzz function tests', () => {
    // Test that the function returns "Fizz" when the number is divisible by 3
    test('should return "Fizz" for numbers divisible by 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(6)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
    });

    // Additional tests for other scenarios can be added here
    test('should return "Buzz" for numbers divisible by 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(10)).toBe('Buzz');
    });
    test('should return "FizzBuzz" for numbers divisible by both 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
    });
    test('should return the number itself if it is not divisible by 3 or 5', () => {
        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(2)).toBe(2);
        expect(fizzbuzz(4)).toBe(4);
    });
});

