// Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

// If both arrays are empty, return -1.

// If one array is empty, return the smallest value from the non-empty array.

// Note: Try to solve this without brute force.

// Example:

//   arr1 = [1, 3, 5, 23, 5]
//   arr2 = [45, 34, 67, 2, 0]
  
//   Output = 1
  
// Example empty array:

//   arr1 = [1, 3, 5, 23, 5]
//   arr2 = []
  
//   Output = 1
  
// Example two empty arrays:

//   arr1 = []
//   arr2 = []
  
//   Output = -1


function smallestDiff(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0)
        return -1

    if (arr1.length === 0)
        return Math.min(...arr2)

    if (arr2.length === 0)
        return Math.min(...arr1)

    const diffs = []
    arr1.forEach((element, index) => {
        const arr2Element = arr2[index]
        let currentDiff = element - arr2Element >= 0 ? (element - arr2Element) : (arr2Element - element)
        diffs.push(currentDiff)
    })
    console.log(diffs)
    return Math.min(...diffs)
}

const arr1 = [1, 3, 5, 23, 5],
  arr2 = [45, 34, 67, 2, 0]

// console.log(smallestDiff(arr1, arr2))
console.log(smallestDiff([1, 3, 5, 23, 5], [45, 34, 67, 2, 0]))