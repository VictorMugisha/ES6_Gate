// In mathematics, a binary operation over the integers, denoted by an operator # and having two arguments, is associative if and only if:

// a # (b # c) = (a # b) # c for all values of a, b, and c.

// Your task is to determine if the provided operator is mathematically associative or not and return true or false respectively.

// All inputs will be valid and selected from built-in operators used for arithmetic and passed in as strings.

// Example:

// '-' is not an associative operator since for all values of a, b, and c it is not true that: a - (b - c) = (a - b) - c.

// Taking a, b, c = 7 we can see that subtraction is not an associative operation:

// 7 - (7 - 7) != (7 - 7) - 7
// 7 - 0       !=  0 - 7
// 7           != -7
// Input: '-' => false

function isAssociative(op) {
    // Use a range of values to minimize special cases (0, 1)
    const randomTestValue = Math.floor(Math.random() * 999) + 1; // Random value between 1 and 999

    let result;
    switch (op) {
        case '-':
            result = randomTestValue - (randomTestValue - randomTestValue) === (randomTestValue - randomTestValue) - randomTestValue;
            break;
        
        case '+':
            result = randomTestValue + (randomTestValue + randomTestValue) === (randomTestValue + randomTestValue) + randomTestValue;
            break;
        
        case '/':
            result = randomTestValue / (randomTestValue / randomTestValue) === (randomTestValue / randomTestValue) / randomTestValue;
            break;
        
        case '*':
            result = randomTestValue * (randomTestValue * randomTestValue) === (randomTestValue * randomTestValue) * randomTestValue;
            break;
        
        case '%':
            result = randomTestValue % (randomTestValue % randomTestValue) === (randomTestValue % randomTestValue) % randomTestValue;
            break;
        
        case '**':
            // Ensure comparison of large values
            const largeRandomValue = Math.random() * 10; // Random value between 0 and 10
            result = Math.pow(largeRandomValue, (Math.pow(largeRandomValue, largeRandomValue))) === Math.pow(Math.pow(largeRandomValue, largeRandomValue), largeRandomValue);
            break;
        
        default:
            result = undefined;
            break;
    }
    console.log(`Operation ${op}: ${result}`);
}

isAssociative('-'); // false
isAssociative('+'); // true
isAssociative('/'); // false
isAssociative('*'); // true
isAssociative('%'); // false
isAssociative('**'); // false
