/**
 * Create a JavaScript function named activeUsers that takes two parameters, 
 * an array of users and age. This function should return the new array containing 
 * the extracted names of active users older than a given age
 */

const users = [
    { id: 1, name: "john", age: 60, isActive: true },
    { id: 2, name: "king", age: 75, isActive: false },
    { id: 3, name: "jasper", age: 20, isActive: true },
    { id: 4, name: "Samy", age: 30, isActive: true },
    { id: 5, name: "Emma", age: 40, isActive: false },
];
console.log(activeUsers(users, 25))
//  Return the new array containing the extracted names
//  output: ["john", "Samy"]


function activeUsers(usersArr, age) {
    const active = usersArr.filter(person => person.age > age && person.isActive)
    const result = []
    active.forEach(person => {
        result.push(person.name)
    })
    return result
}