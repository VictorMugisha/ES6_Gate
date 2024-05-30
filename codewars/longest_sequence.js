// Write a function longest_sequence that takes in an array and value as arguments. Return the length of the longest sequence of the value in the array as an integer.

// For example, if the array was [1, 0, 1, 1, 0, 0, 1, 1, 1] and the value to check was 1, then you would return 3.

// There does not need to be a strict longest sequence, if two sequences are tied, return one of their lengths. If the value doesn't occur in the array, return 0.

function longest_sequence(arr = [], elem) {
    const sequences = []
    let sequence = []
    
    arr.forEach((element, index, target) => {
        if (element === elem) {
            sequence.push(element)
        } else {
            if (sequence.length !== 0) {
                sequences.push(sequence)
            }
            sequence = []
        }
    })
    if (sequence.length !== 0) {
        sequences.push(sequence)
    }
    console.log(sequences)

    return Math.max(...sequences.map(array => array.length))
}

longest_sequence([1, 2, 2, 1, 2, 1, 2, 2, 2], 2) // [2,2] [2] [2,2,2]
longest_sequence([1, 0, 1, 1, 0, 0, 1, 1, 1], 1) 