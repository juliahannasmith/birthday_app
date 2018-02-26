var countdownButton = document.getElementById('getDayCountdown');

function birthdayCountDown(bdate) {

    var today = new Date();
    var bday = new Date(bdate);
    var currenttime = today.getTime();
    var btime = bday.getTime();

    if ((btime - currenttime) < 0) {


        bday.setFullYear(today.getFullYear());

        if ((bday.getTime() - today.getTime()) < 0) {
            bday.setFullYear(bday.getFullYear() + 1);
        }

    }

    var daysuntil = Math.ceil((bday.getTime() / 86400000) - (today.getTime() / 86400000));

return daysuntil;


}




function displayDays(){
    var input = new Date(document.getElementById('inputDate').value);
    var result = birthdayCountDown(input);

    document.getElementById('signText').textContent = result;
}

countdownButton.addEventListener('click', getDayCountdown);


