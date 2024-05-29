

// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]


function twosDifference(input) {
    const result = []
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            let temp = []
            if (input[i] - input[j] === 2 || input[j] - input[i] === 2) {
                temp.push(input[i])
                temp.push(input[j])
            }
            if (temp.length !== 0) {
                result.push(temp)
            }
            temp = []
        }
    }

    const resultArray = (function(array) {
        return array.map(arr => arr.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0])
    })(result)

    return resultArray
}

const test1 = [1, 2, 3, 4]
const test2 = [4, 1, 2, 3]
const test3 = [1, 23, 3, 4, 7]
const test4 = [4, 3, 1, 5, 6]

console.log(twosDifference(test1))
console.log(twosDifference(test2))
console.log(twosDifference(test3))
console.log(twosDifference(test4))