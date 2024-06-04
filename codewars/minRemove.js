// Given an array of integers, find the minimum number of elements to remove from the array so that the square root of the largest integer in the array is less or equal to the smallest number in the same array.

// x = smallest integer in the array

// y = largest integer in the array

// Find the minimum number of elements to remove so, √y ≤ x.

// Example
// A = {3, 6, 5, 9, 16}
// min=3 max=16

// √16 > 3

// remove 16, so largest element becomes 9.

// √9 ≤ 3

// so

// minRemove(A) = 1
// since only 16 was removed.

// Note
// If all integers in the array are equal, then it wouldnt make any sense to reduce the array any further, so return 0.

// minRemove({2}) //=> 0
// minRemove({6,6,6,6}) //=> 0
// minRemove({6,6,6,2}) //=> 1


function minRemove(arr = []) {
    let subArray = []
    for (let num of arr) {
        let index = arr.indexOf(num)
        let otherArray = arr.slice(index + 1) 
        subArray.push(num)
        for (let otherNum of otherArray) {
            subArray.push(otherNum)
            if (!Math.sqrt(subArray[subArray.length - 1]) > subArray[0]) {}
        }
    }
}

let test = minRemove([3,4,5,6,9,16])