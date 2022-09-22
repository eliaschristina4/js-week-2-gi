/* EASY: Create an array of students holding their last name, first name, and age with 3 students. 
To validate, please log a greeting with the first name, last name and age of the 2nd student. 
The output should look like "Hello, my name is John Doe and I'm 19 years old." */

const students = [
    {
        fname: 'Christina',
        lname: 'Elias',
        age: 25
    },
    {
        fname: 'Bernie',
        lname: 'Sanders',
        age: 99
    },
    {
        fname: 'Beyonce',
        lname: 'Knowles',
        age: 41
    }
]

console.log( `Hello, my name is ${students[1].fname} ${students[1].lname} and I'm ${students[1].age} years old.` )