
var button = document.getElementById('calculateAll');



function checkDate() {
    var date = document.getElementById('inputDate').value;
    var sorry = "Sorry that is an invalid date. Please try again.";
    var check1 = format.substring(2,3)
    var check2 = format.substring(5,6)
    if (check1 == "/" && check2  == "/")
    if (isNaN(new Date(date).getTime) == true || date.length > 10 || date.length < 8) {
        document.getElementById('errorText').textContent = sorry;

    }

}

button.addEventListener('click', displayerror);
