let students = [
  { name: "Chaisit", grade: "4" },
  { name: "Moss", grade: "3" },
  { name: "Pee", grade: "2" },
];

students.forEach((student, index) => {
  console.log(`Student ${index}: ${student.name}, Grade: ${student.grade}`);
});

function showStudentCount() {
  console.log("Total student:", students.length);
}
showStudentCount();
