function fizzbuzz(num) {
    // Construct a key from the divisibility of num by 3 and 5
    if (typeof num !== 'number' || isNaN(num)) {
        return null;
    }
    
    const key = `${num % 3 === 0}-${num % 5 === 0}`;
    switch (key) {
        case "true-true":
            return 'FizzBuzz';
        case "true-false":
            return 'Fizz';
        case "false-true":
            return 'Buzz';
        default:
            return num;
    }
}

module.exports = fizzbuzz;
