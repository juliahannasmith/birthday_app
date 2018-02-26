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
function displayAge(){
    var input = document.getElementById('Age').value;
    var result = agebutton(input);

    document.getElementById('signText').textContent = result;
}
signButton.addEventListener('click', displayAge);

