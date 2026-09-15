console.log("Welcome to the first lab of Dynamic Web Technologies");

// Create an object student with properties name, course, and an array of grades. Add a method to calculate
// and return the average grade. Tip: Look for the JS arrays in the resources section

// https://www.w3schools.com/js/js_arrays.asp
// https://stackoverflow.com/questions/60573801/adding-together-any-number-of-items-in-an-array-with-javascript

const student = {
    name: "John Doh",
    course: "Mobile and Web Development",
    grades: [85, 90, 92, 88, 95],

    displayAverage: function() {
        let gradeTotal = this.grades.reduce((acc, curr) => parseInt(curr) + parseInt(acc)) //Should be: 450

        let avgTotal = gradeTotal / this.grades.length; // Should be: 450 / 5

        console.log(`Average Grade: ${avgTotal}`); // Should be: 90
    }
}

student.displayAverage();