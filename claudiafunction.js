/////////// Birthday and Age
var agebutton = document.getElementById("calculateAge");
function getAge() {
    var today = new Date();
    var birthdate = new Date(document.getElementById('inputDate').value);
    var age = Math.floor((today - birthdate)/ (360 * 24 * 60 * 60 * 1000));

    return "You are " + age + " years old!";
}
function displayAge(){
    var result = getAge();

    document.getElementById('age').textContent = result;
}
agebutton.addEventListener('click', displayAge);
