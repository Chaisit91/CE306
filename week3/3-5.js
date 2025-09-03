let students = [
  { name: "Note", score: 60 },
  { name: "Somsak", score: 80 },
  { name: "Moss", score: 45 },
  { name: "Pee", score: 53 },
  { name: "Ivy", score: 50 },
  { name: "Bass", score: 32 },
  { name: "Natee", score: 20 },
];

function filterPassedStudents(lowScore) {
  students.forEach((student) => {
    if (student.score >= lowScore) {
      console.log(`Student ${student.name} passed with score ${student.score}`);
    }
  });
}

filterPassedStudents(85);
