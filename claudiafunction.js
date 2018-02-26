/////////// Birthday and Age
var agebutton = document.getElementById("calculateAge");
function getAge() {
    var personbirthdate = new Date(document.getElementById('inputDate'.value));
      var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
}
signButton.addEventListener('click', getAge);

