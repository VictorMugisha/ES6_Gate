
/**
 * Create a function that performs a pivot operation, 
 * on an array of objects, converting it from long to wide format based on specified keys.
 */

// const longFormatData = [
//     { id: 1, name: "Alice", age: 30 },
//     { id: 2, name: "Bob", age: 25 },
//     { id: 3, name: "Charlie", age: 35 }
// ];
// const keys = ["id", "name"];
// // const wideFormatData = pivotLongToWide(longFormatData, keys);
// // console.log(wideFormatData);
// output: {
//   id: [ 1, 2, 3 ],
//   name: [ 'Alice', 'Bob', 'Charlie' ]
// }
// ..................................................................................
// const longFormatData = [
//     { id: 1, lastName: "Dany", age: 30 },
//     { id: 2, lastName: "Josue", age: 25 },
//     { id: 3, lastName: "Noella", age: 35 }
// ];
// const keys = ["id", "lastName"];
// // const wideFormatData = pivotLongToWide(longFormatData, keys);
// // console.log(wideFormatData);
// output: {
//   id: [ 1, 2, 3 ],
//   lastName: [ 'Dany', 'Josue', 'Noella' ]
// }

function pivotLongToWide(elements, keys) {
    const resultObj = {}

    for (key of keys) {
        const arr = []
        for (data of elements) {
            arr.push(data[key])
        }
        resultObj[key] = arr
    }

    return resultObj
}


const longFormatData = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];
const keys = ["id", "name"];
const wideFormatData = pivotLongToWide(longFormatData, keys);
console.log(wideFormatData);
// output: {
//     id: [ 1, 2, 3 ],
//     name: [ 'Alice', 'Bob', 'Charlie' ]
// }



const longFormatData2 = [
    { id: 1, lastName: "Dany", age: 30 },
    { id: 2, lastName: "Josue", age: 25 },
    { id: 3, lastName: "Noella", age: 35 }
];
const keys2 = ["id", "lastName"];
const wideFormatData2 = pivotLongToWide(longFormatData2, keys2);
console.log(wideFormatData2);
// output: {
//     id: [ 1, 2, 3 ],
//     lastName: [ 'Dany', 'Josue', 'Noella' ]
// }