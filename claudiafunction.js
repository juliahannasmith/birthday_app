/////////// Birthday and Age
var agebutton = document.getElementById("calculateAge");
function getAge() {
    var today = new Date();
    var birthdate = new Date(document.getElementById('inputDate'.value));
    var age = today.getFullYear() - birthdate.getFullYear();
    var month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function displayAge(){
    var result = getAge();

    document.getElementById('age').textContent = result;
}
agebutton.addEventListener('click', displayAge);


