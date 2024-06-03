// Task
// Given an array of integers, remove the n smallest. If there are multiple elements with the same value, remove the ones with a lower index first. If n is greater than the length of the array/list, return an empty list/array. If n is zero or less, return the original array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest (-10) [1,2,3,4,5] = [1,2,3,4,5]
// removeSmallest 0 [1,2,3,4,5] = [1,2,3,4,5]
// removeSmallest 2 [5,3,2,1,4] = [5,3,4]
// removeSmallest 3 [5,3,2,1,4] = [5,4]
// removeSmallest 3 [1,2,3,4,5] = [4,5]
// removeSmallest 5 [1,2,3,4,5] = []
// removeSmallest 9 [1,2,3,4,5] = []

// removeSmallest 2 [1,2,1,2,1] = [2,2,1]

function removeSmallest(n, arr = []) {
    if (n <= 0) {
        console.log(arr);
        return arr;
    }
    if (n >= arr.length) {
        console.log([]);
        return [];
    }
    let result = [...arr];

    for (let i = 0; i < n; i++) {
        let smallestIndex = 0;
        for (let j = 1; j < result.length; j++) {
            if (result[j] < result[smallestIndex]) {
                smallestIndex = j;
            }
        }
        result.splice(smallestIndex, 1);
    }

    console.log(result);
    return result;
}

removeSmallest (-10, [1,2,3,4,5]) // [1,2,3,4,5]
removeSmallest (0, [1,2,3,4,5]) // [1,2,3,4,5]
removeSmallest (2, [5,3,2,1,4]) // [5,3,4]
removeSmallest (3, [5,3,2,1,4]) // [5,4]
removeSmallest (3, [1,2,3,4,5]) // [4,5]
removeSmallest (5, [1,2,3,4,5]) // []
removeSmallest (9, [1,2,3,4,5]) // []