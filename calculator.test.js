// calculator.test.js
const { calculate } = require('./calculator');

describe('Calculator function tests', () => {
    describe('Operations', () => {
        test.each([
            [1, 2, '+', 3],
            [5, 6, '+', 11],
            [2, 1, '-', 1],
            [5, 3, '-', 2],
            [2, 3, '*', 6],
            [5, 4, '*', 20],
            [10, 2, '/', 5],
            [9, 3, '/', 3],
            [0, 1, '/', 0],
            [-1, -1, '*', 1]
        ])('%i %s %i should equal %i', (a, b, operator, expected) => {
            expect(calculate(a, b, operator)).toBe(expected);
        });

        test.each([
            [5, 0, '/'],
            [-10, 0, '/'],
            [0, 0, '/']
        ])('throws error when dividing %i by %i', (a, b, operator) => {
            expect(() => calculate(a, b, operator)).toThrow("Cannot divide by zero");
        });

        test.each([
            [1, 1, '?'],
            [2, 3, 'x']
        ])('throws error for unsupported operation %s', (a, b, operator) => {
            expect(() => calculate(a, b, operator)).toThrow("Unsupported operation");
        });
    });
});
