var totalMarks = localStorage.getItem('totalMarks');

if (!totalMarks || totalMarks <= 380 || totalMarks > 480) {
  do {
    totalMarks = Math.floor(Math.random() * (480 - 381 + 1)) + 381;
  } while (totalMarks <= 380 || totalMarks > 430);
  
  localStorage.setItem('totalMarks', totalMarks);
}

var formattedTotalMarks = totalMarks + "/650";
document.getElementById('totalMarks').textContent = formattedTotalMarks;
