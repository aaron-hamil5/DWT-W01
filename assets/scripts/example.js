console.log("Welcome to the first lab of Dynamic Web Technologies");

// Create a script using control structures to categorise students based on their grades. Define an array of student
// objects, each with a name and grade. Then, iterate through the array and print a message for each student
// stating whether they passed or failed the "Dynamic Web Technologies" module. Consider a grade of 40 and
// above as a pass (Just like the real life at the UWS….).

const students = [
    {name: "John", grade: 40},
    {name: "Jane", grade: 30},
    {name: "Bob", grade: 50},
    {name: "Alice", grade: 20}
]

function gradeStudents (student){
    if (student.grade >= 40) {
        console.log(`${student.name} passed the module!`);
    } else {
        console.log(`${student.name} failed the module!`);
    }
}

for (let student of students) {
    gradeStudents(student);
}