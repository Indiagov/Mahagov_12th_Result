// Generate a random total marks between 271 and 500
var totalMarks = Math.floor(Math.random() * (500 - 271 + 1)) + 271;
document.getElementById('totalMarks').textContent = totalMarks;
