var totalMarks = localStorage.getItem('totalMarks');

if (!totalMarks || totalMarks > 380) {
  do {
    totalMarks = Math.floor(Math.random() * (500 - 271 + 1)) + 271;
  } while (totalMarks > 380);
  
  localStorage.setItem('totalMarks', totalMarks);
}

var formattedTotalMarks = totalMarks + "/100";
document.getElementById('totalMarks').textContent = formattedTotalMarks;

