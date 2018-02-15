/////////// Birthday and Age
var agebutton = document.getElementById("calculateAge");
function getAge() {
    var personbirthdate = new Date(document.getElementById('inputDate'.value));
    var todayyear = new Date();
    var calculateage = todayyear.getFullYear() - personbirthdate.getFullYear();
    return age;
}
signButton.addEventListener('click', getAge);
