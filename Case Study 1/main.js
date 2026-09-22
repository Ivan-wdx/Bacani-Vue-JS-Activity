let name = prompt("Enter student's name:");
let age = Number(prompt("Enter student's age:"));
let course = prompt("Enter student's course:");

let grades = [];

for (let i = 0; i < 3; i++) {
    let grade = Number(prompt("Enter grade " + (i + 1) + ":"));
    grades.push(grade);
}

let total = 0;

for (let i = 0; i < grades.length; i++) {
    total += grades[i];
}

let average = total / grades.length;

let status;

if (average >= 75) {
    status = "Passed";
} else {
    status = "Failed";
}

alert(
    "Student Information:\n" +
    "Name: " + name + "\n" +
    "Age: " + age + "\n" +
    "Course: " + course + "\n" +
    "Grades: " + grades.join(", ") + "\n" +
    "Average: " + average.toFixed(2) + "\n" +
    "Status: " + status
);

console.log("Student Information:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);
console.log("Grades:", grades);
console.log("Average:", average.toFixed(2));
console.log("Status:", status);