// Create a function

// hasTwoCubeSums(n) 
// which checks if a given number n can be written as the sum of two cubes in two different ways: n = a³+b³ = c³+d³. All the numbers a, b, c and d should be different and greater than 0.

// E.g. 1729 = 9³+10³ = 1³+12³.

// hasTwoCubeSums(1729); // true
// hasTwoCubeSums(42);   // false

function hasTwoCubeSums(n) {
    for (let number = 1; number <= n; number++) {
        for (let number2 = 1; number2 <= n; number2++) {
            if (number2 === number) continue
            if (Math.pow(number, 3) + Math.pow(number2, 3) === n && number !== number2) return true
        }
    }

    return false
}


function hasTwoCubeSums(n) {
    // Initialize pointers
    let start = 1;
    let end = Math.floor(Math.pow(n, 1/3));

    // Loop until pointers meet or cross
    while (start < end) {
        // Calculate the sum of cubes
        const sum = Math.pow(start, 3) + Math.pow(end, 3);
        
        // Debug output
        console.log(`Start: ${start}, End: ${end}, Sum: ${sum}`);
        
        // Check if the sum equals n
        if (sum === n) {
            return true;
        } else if (sum < n) {
            start++; // Increment start pointer if sum is less than n
        } else {
            end--; // Decrement end pointer if sum is greater than n
        }
    }

    return false;
}

// Test case
console.log(hasTwoCubeSums(123456789)); // Debugging output will help us understand what's happening for this test case


console.log(hasTwoCubeSums(1729));
console.log(hasTwoCubeSums(42));