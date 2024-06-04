// DESCRIPTION:
// Write

// function combine()
// that combines arrays by alternatingly taking elements passed to it.

// E.g

// combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
// combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
// combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
// Arrays can have different lengths.

/**
 * 1. 
 */

function combine(...arrays) {
    const resultArray = [];
    const maxLength = Math.max(...arrays.map(arr => arr.length));

    for (let i = 0; i < maxLength; i++) {
        for (let arr of arrays) {
            if (i < arr.length) {
                resultArray.push(arr[i]);
            }
        }
    }
    console.log(resultArray)
    return resultArray;
}
// combine(['a', 'b', 'c'], [1, 2, 3])
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript

// https://www.codewars.com/collections/javascript-6kyu (CodeWars Collection)