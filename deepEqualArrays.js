/**
 * Create a function that performs a deep comparison 
 * between two arrays of objects, checking for equality of nested properties.
 */

// const array1 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// const array2 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// // console.log(deepEqualArrays(array1, array2));
// output: true
// ......................................................................................

// const array1 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// const array2 = [
//     { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// console.log(deepEqualArrays(array1, array2));
// output: false


function deepEqualArrays(arr1 = [], arr2 = []) {
    return arr1.every((obj, index) => {
        const obj2 = arr2[index]
        for (key in obj) {
            if (key in obj2 && ''+obj[key] === ''+obj2[key]) {
                return true
            } else {
                return false
            }
        }
    })
}

const sample1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const sample2 = [
    { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];
console.log(deepEqualArrays(sample1, sample2)); // false

const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

console.log(deepEqualArrays(array1, array2)); // output: true