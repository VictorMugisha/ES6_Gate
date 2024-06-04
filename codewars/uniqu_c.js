// Implement a function which behaves like the 'uniq -c' command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance together with the number of times a duplicate elements occurred in the original array.

// Example:
// ['a','a','b','b','c','a','b','c'] --> [['a',2],['b',2],['c',1],['a',1],['b',1],['c',1]]


function uniq_c(arr = []) {
    let used = []
    let result = []
    let one = []
    for (let a of arr) {
        if (!used.includes(a)) {
            let count = arr.filter(el => el === a).length
            one.push(a)
            one.push(count)
            result.push(one)
            used.push(a)
            one = []
            count = 0
        }
    }
    console.log(result)
}

uniq_c(['a','a','b','b','c','a','b','c'])