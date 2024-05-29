// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents,
//  cents need to be truncated to 2 decimals, in the case that the decimal part of the number 
//  is 1 character long or none you should add 0's 
//  so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number


function numberToPrice(number) {
    if (isNaN(number))
        return 'NaN'

    let formattedNumber = []
    let numberPart = String(number).split('.')[0]
    let part = []
    for (let digit of numberPart.split('').reverse()) {
        part.push(digit)
        if (part.length === 3) {
            formattedNumber.push(part.join(''))
            part = []
        }
    }
    let numPart = (part.length > 0) ? [`${part.reverse().join('')}`, `${formattedNumber.join(',').split('').reverse().join('')}`].join(',') : `${formattedNumber.join(',').split('').reverse().join('')}`
    let decimalPart = String(number).split('.')[1]

    let dec = (function (decimalPart = [0, 0]) {
        return String(Array.of(decimalPart[0], decimalPart[1] || 0).join(''))
    })(decimalPart)
  

    const result = `${numPart}.${dec}`
    console.log(result)
    return result
}
var price = numberToPrice(13253.5123);
// console.log("Price 1: " + price); 
var price2 = numberToPrice(1000000000.5);
var price2 = numberToPrice(100.5);
// console.log("Price 2: " + price2); 