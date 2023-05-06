// 1. Given an array of strings, use a function to reverse all the elements in the
// string in ascending order and the specific elements in descending order

function reverseElement(str) {
    str = str.map(arr => arr.split("").reverse().join(""));
    str.sort();
    
    [str[x] = str[xx]] = [str[2], str[1]].map(arr => arr.split("").reverse().join(""))
    return str
}
let str = ["hello", "dear", "clarah"]
console.log(reverseElement(str));

// 2. Given an array of objects, each object representing a person with a name and age
// property, write a function that returns the sum of all people who are less than 18 years.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];

const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

function personDetails(people) {
    let sumPeople = 0;
    for(let x = 0; x < people.length; x++){
        if (people[x].age < 18){
            sumPeople += people[i].age
        }
    }
    return sumPeople
}
let ages = personDetails(people);
console.log(ages);


// 3. Using JS functions and an array of numbers, return positive if an element within the array 
// is positive, negative if an element is negative, else zero

function checkArry(signs) {
    for(let x = 0; x < signs.length; x++){
        if(signs[1] > 0){
            return "positive";
        }
        else if (signs[i] < 0){
            return "negative"
        }
    }
    return "zero"
}
let signs = [4]
console.log(signs);


// 4. Given an array of objects, where each object represents an employee with 
// an id, name, and salary property, write a function that returns a new array 
// of employee objects sorted by their salary in ascending order.

const employees = [
    { name: 'chep', salary: 69721,   id:47 },
    { name: 'clarah', salary: 5600,id:161 },
    { name: 'issah', salary: 78600,  id:92 },
    { name: 'joy', salary: 8675,  id:212 },
  ];
  function employeesSalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
  }
  let  sortedEmployees = employeesSalary(employees);
  console.log(sortedEmployees);