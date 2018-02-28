var textButton = document.getElementById('age');

function validText(){
    if ()
}












var countdownButton = document.getElementById('getDayCountdown');
var signButton = document.getElementById('getSign');
var agebutton = document.getElementById('calculateAge');



function displayerror() {
    var date = document.getElementById('inputDate').value;
    var sorry = "Sorry that is an invalid date. Please try again.";
    if (new Date(date).getTime() == NaN) {
        document.getElementById('errorText').textContent = sorry;

    }
}


countdownButton.addEventListener('click', displayerror);
signButton.addEventListener('click', displayerror);
agebutton.addEventListener('click', displayerror);
