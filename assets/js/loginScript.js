function showLogin() {
    document.getElementById("loginDiv").style.display="block";
    document.getElementById("signupDiv").style.display="none";
}
function showSignup() {
    document.getElementById("loginDiv").style.display="none";
    document.getElementById("signupDiv").style.display="block";
}
// const currentTime = new Date();
// const formattedTime = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;

// document.getElementById("inputDateTime").value=formattedTime;
