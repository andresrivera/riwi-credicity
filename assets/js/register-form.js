//================================== CREATE NEW USER =========================================
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();
console.log(hoy);

//let termAndConditions = document.getElementById("termAndConditions");
//let personalData = document.getElementById("personalData");

let btnRegister = document.getElementById('btnRegister');

function addNewUser (){

    let nameUser = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let genderUser = document.querySelector('input[name="gendern"]:checked').value;
    let type_document = document.getElementById("type_document").value;
    let document_number = document.getElementById("document").value;
    let document_expedition = document.getElementById("document_expedition").value;
    let birthdayUser = document.getElementById("birthday").value;
    let emailUser = document.getElementById("email").value;
    let phoneNumberUser = document.getElementById("phone_number").value;
    let countryUser = document.getElementById("country").value;
    let stateUser = document.getElementById("state").value;
    let cityUser = document.getElementById("city").value;
    let create_password = document.getElementById("create_password").value;

    let dataUser = {
        name: nameUser,
        last_name: last_name,
        gender: genderUser,
        birthday: birthdayUser,
        email: emailUser,
        phone: phoneNumberUser,
        document_type : type_document,
        document: document_number,
        expedition_date: document_expedition,
        country: countryUser,
        state: stateUser,
        city: cityUser, 
        password: create_password,
        created_at: hoy.toLocaleDateString()
    }

    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify(dataUser),
        headers: {'Content-type': 'application/json'}
    })
    .then((response) => response.json())
    .then(data =>{console.log(data);})
    console.log(create_password);
}
btnRegister.onclick = addNewUser
