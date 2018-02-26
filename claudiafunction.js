/////////// Birthday and Age
var agebutton = document.getElementById("calculateAge");
function getAge() {
    var today = new Date();
    var personbirthdate = new Date(document.getElementById('inputDate'.value));
      var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
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

