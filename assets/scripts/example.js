console.log("Welcome to the first lab of Dynamic Web Technologies");


// Develop a small-scale Student Information System using JavaScript, integrating various concepts covered in the
// lab sessions. This application will manage student data, including names, courses, and grades, and provide
// functionality to add, view, and compute average grades.

// TIP: Have a look at the following links to learn about using classes in JavaScript and the array find() method

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes
// https://www.w3schools.com/jsref/jsref_find.asp

// Requirements:
// 1. Student Data Structure: Use objects to store student information (name, course, grade),
// 2. Functions for Operations: Implement functions to add new students, retrieve a student's details, and calculate
// average grades.
// 3. Control Structures: Utilize control structures for logical operations, like determining grade classifications
// (e.g., Pass, Fail).
//4. Array Manipulations: Use arrays to store multiple student objects and apply array methods for data handling.

// TIP: You can start, for example, creating a new Student Class as the following.

class Student {
    constructor(name, course, grades) {
        this.name = name;
        this.course = course;
        this.grades = grades;
    }
    averageGrade() {
        let gradeTotal = this.grades.reduce((acc, curr) => parseInt(acc) + parseInt(curr));

        let averageTotal = gradeTotal / this.grades.length;

        if (averageTotal >= 40) {
            console.log(this.name + " has a " + averageTotal + " average grade and has passed " + this.course)
        } else {
            console.log(this.name + " has a " + averageTotal + " average grade and has failed " + this.course)
        }
    }
}

const students = [
    new Student("John", "CS", [85, 90, 75]),
    new Student("Jane", "Math", [95, 80, 65]),
    new Student("Bob", "Physics", [70, 60, 85]),
    new Student("Alice", "Chemistry", [88, 92, 78]),
]

students.find(student => student.name === "Jane").averageGrade();