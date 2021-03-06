var signButton = document.getElementById('calcualteAll');

function getSign() {
    var birthdate = new Date(document.getElementById('inputDate').value);
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

function displaySign(){
    var result = getSign();

    document.getElementById('result').textContent = result;
}

signButton.addEventListener('click', displaySign);
