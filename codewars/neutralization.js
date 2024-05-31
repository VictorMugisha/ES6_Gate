// DESCRIPTION:
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"
// Notes
// The two strings will be the same length.

function neutralise(s1, s2) {
    let result = ''
    s1.split('').forEach((element, index) => {
        if (element === s2.split('')[index]) {
            result += element
        } else {
            result += "0"
        }
    });
    // result = s1.split('').map((element, index) => {
    //     if (element === s2.split('')[index]) {
    //         return element
    //     } else {
    //         return "0"
    //     }
    // })
    return result
}
console.log(neutralise("--++--", "++--++"))
// console.log("++--", "++--++")