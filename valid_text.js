
var button = document.getElementById('calculateAll');



function displayerror() {
    var date = document.getElementById('inputDate').value;
    var sorry = "Sorry that is an invalid date. Please try again.";
    if (isNaN(new Date(date).getTime) == true || date.length > 10 || date.length < 8) {
        document.getElementById('errorText').textContent = sorry;

    }

}

button.addEventListener('click', displayerror);
