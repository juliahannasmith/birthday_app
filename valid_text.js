
var countdownButton1 = document.getElementById('getDayCountdown');
var signButton1 = document.getElementById('getSign');
var agebutton1 = document.getElementById('calculateAge');



function displayerror() {
    var date = document.getElementById('inputDate').value;
    var sorry = "Sorry that is an invalid date. Please try again.";
    if (isNaN(new Date(date).getTime) == true || date.length > 10 || date.length < 8) {
        document.getElementById('errorText').textContent = sorry;

    }

}


countdownButton1.addEventListener('click', displayerror);
signButton1.addEventListener('click', displayerror);
agebutton1.addEventListener('click', displayerror);
