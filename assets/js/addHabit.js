const currentDateTime = new Date();
const formattedTime = `${String(currentDateTime.getHours()).padStart(2, '0')}:${String(currentDateTime.getMinutes()).padStart(2, '0')}`;

document.getElementById("inputDateTime").value=formattedTime;
