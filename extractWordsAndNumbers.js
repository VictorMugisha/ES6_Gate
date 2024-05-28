/**
 * Write a function in JavaScript that takes an array of strings 
 * combined with numbers as input and returns a new array containing 
 * the original string and the extracted numeric values from those strings.
 * 
 * 
 * const input = ["Hello123", "World456", "49", "Another789"];
 * const output = extractWordsAndNumbers(input);
 * // console.log(output);
 * output: [  "Hello",123, "World", 456, 49, "Another", 789] // Expected output
 */

function extractWordsAndNumbers(input) {
    const resultArray = []

    for (element of input) {
        if (!isNaN(Number(element))) {
            resultArray.push(Number(element))
        } else {
            let stringPart = ''
            let numberPart = ''

            for (character of element) {
                if (!isNaN(Number(character))) {
                    numberPart += character
                } else {
                    stringPart += character
                }
            }

            resultArray.push(stringPart)
            resultArray.push(Number(numberPart))
        }
    }

    // console.log(resultArray)

    return resultArray
}

const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);
console.log(output);
// output: [  "Hello",123, "World", 456, 49, "Another", 789]