
/**
 * Create a function that performs a JOIN operation on two arrays of objects, 
 * based on a common property, and returns a new array of merged objects.
 */

function sqlJoin(employees, salaries) {
    let result = []
    for (employee of employees) {
        for (salary of salaries) {
            const temp = {}
            if (employee.id === salary.id) {
                temp.id = employee.id
                temp.name = employee.name
                temp.department = employee.department
                temp.salary = salary.salary
                result.push(temp)
            }
        }
    }
    return result
}

const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];

const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
];

const result = sqlJoin(employees, salaries);
console.log(result);

// output: [
//        {id: 1, name: 'John', department: 'IT', salary: 50000},
//        {id: 2, name: 'Jane', department: 'HR', salary: 60000}
// ]