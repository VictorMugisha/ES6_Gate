// The number 12 is the first number in having six divisors, they are: 1, 2, 3, 4, 6 and 12. Your challenge for this kata is to find the minimum number that has a certain number of divisors. For this purpose we have to create the function

// find_min_num() or findMinNum() or similar in the other languages

// that receives the wanted number of divisors num_div, and outputs the smallest number having an amount of divisors equals to num_div.

// Let's see some cases:

// find_min_num(10) = 48 # divisors are: 1, 2, 3, 4, 6, 8, 12, 16, 24 and  48
// find_min_num(12) = 60
// In this kata all the tests will be with numDiv < 80

// (There will be a next kata with numDiv < 10000, Find the First Number Having a Certain Number of Divisors II, should have the help of number theory)

// Enjoy it and happy coding! (Memoization is advisable)

function findDivisors(num) {
    const divisors = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) 
            divisors.push(i)
    }
    return divisors
}

function findMinNum(num) {
    let i = 1;
    let div = []
    while(i > 0) {
        div = findDivisors(i)
        if (div.length === num) {
            console.log(div)
            break
        }
        i++
    }
    return div[div.length - 1]
}

const test = findMinNum(7)
console.log(test)