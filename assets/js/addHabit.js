const currentTime = new Date();
const formattedTime = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;

document.getElementById("inputDateTime").value=formattedTime;