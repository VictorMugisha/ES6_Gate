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
    const resultArray = []

    const arrObj = []
    let obj = {}
    arrays.forEach((array, index, inputArray) => {
        array.forEach((element, idx) => {
            obj.value = element
            obj.index = idx
            obj.array = index
            arrObj.push(obj)
            obj = {}
        })
    })

    // arrObj.sort((a, b) => a.index - b.index).forEach(obj => {
    //     resultArray.push(obj.value)
    // })

    // console.log(resultArray)
    // return resultArray

    console.log(arrObj.sort((a, b) => a.array - b.array))
}
// combine(['a', 'b', 'c'], [1, 2, 3])
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])