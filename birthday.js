var clickbutton = document.getElementById('calculateAll');


function getSign(input) {
    var birthdate = new Date(input);
    var month = birthdate.getMonth() + 1;
    var day = birthdate.getDate();
    var sign = "";

    if (month == 1 || month == 2) {
        if ((day >= 20 && month == 1) || (day <= 18 && month == 2)) {
            sign = "Aquarius";
        }
    } else if (month == 2 || month == 3) {
        if ((day >= 19 && month == 2) || (day <= 20 && month == 3)) {
            sign = "Pisces";
        }
    } else if (month == 3 || month == 4) {
        if ((day >= 21 && month == 3) || (day <= 19 && month == 4)) {
            sign = "Aries";
        }
    } else if (month == 4 || month == 5) {
        if ((day >= 20 && month == 4) || (day <= 20 && month == 5)) {
            sign = "Taurus";
        }
    } else if (month == 5 || month == 6) {
        if ((day >= 21 && month == 5) || (day <= 20 && month == 6)) {
            sign = "Gemini";
        }
    } else if (month == 6 || month == 7) {
        if ((day >= 21 && month == 6) || (day <= 22 && month == 7)) {
            sign = "Cancer";
        }
    } else if (month == 7 || month == 8) {
        if ((day >= 23 && month == 7) || (day <= 22 && month == 8)) {
            sign = "Leo";
        }
    } else if (month == 8 || month == 9) {
        if ((day >= 23 && month == 8) || (day <= 22 && month == 9)) {
            sign = "Virgo";
        }
    } else if (month == 9 || month == 10) {
        if ((day >= 23 && month == 9) || (day <= 22 && month == 10)) {
            sign = "Libra";
        }
    } else if (month == 10 || month == 11) {
        if ((day >= 23 && month == 10) || (day <= 21 && month == 11)) {
            sign = "Scorpio";
        }
    } else if (month == 11 || month == 12) {
        if ((day >= 22 && month == 11) || (day <= 21 && month == 12)) {
            sign = "Sagittarius";
        }
    } else if (month == 12 || month == 1) {
        if ((day >= 22 && month == 12) || (day <= 19 && month == 1)) {
            sign = "Capricorn";
        }
    }

    return sign;
};




function birthdayCountDown(input) {

    var today = new Date();
    var bday = new Date(input);
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

function getAge(input) {
    var today = new Date();
    var birthdate = new Date(input);
    var age = Math.floor((today.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365));
    if (birthdate.getTime() > today.getTime()) {
        age = age - 1;
    }

    return age;
}


function checkDate(input) {
    if (input.length != 10) {
        return false;
    } else {
        var check1 = input.substring(2,3);
        var check2 = input.substring(5,6);
        if (check1 != "/" && check2  != "/"){
            return false;
        }
        var date = new Date(input);
        if (isNaN(date.getTime()) == true) {
            return false;
        }
    }
    return true;
}


function displayFinalResult(){
    var input = document.getElementById('inputDate').value;
    var sorry = "Sorry that is an invalid date. Please try again.";
if (checkDate(input) == false){

        document.getElementById('result').textContent = sorry;
    } else {
    var result1 = getSign(input);
    var result2 = birthdayCountDown(input);
    var result3 = getAge(input);
    var finalResult = "You are " + result3 + " years old, your star sign is " + result1 + ", and there are " + result2 + " days until your next birthday.";
        document.getElementById('result').textContent = finalResult;
    }




}


clickbutton.addEventListener('click', displayFinalResult);


