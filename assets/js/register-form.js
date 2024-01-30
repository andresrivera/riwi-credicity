
function mostrar(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let type_document = document.getElementById("type_document").value;
    let document_number = document.getElementById("document").value;
    let document_expedition = document.getElementById("document_expedition").value;
    let birthday = document.getElementById("birthday").value;
    
    
    let gendern = document.querySelector('input[name="gendern"]:checked').value;
    
    let phone_number = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    
    let create_password = document.getElementById("create_password").value;
    let check_password = document.getElementById("check_password").value;
    
    
    let termAndConditions = document.getElementById("termAndConditions").value;
    let personalData = document.getElementById("personalData").value;
    
    console.log(name)
    console.log(last_name);
    console.log(type_document);
    console.log(document_number);
    console.log(document_expedition);
    console.log(birthday);
    
    console.log(gendern);
    
    console.log(phone_number);
    console.log(email);
    
    console.log(country);
    console.log(state);
    console.log(city);
    console.log(create_password);
    console.log(check_password);
    
    console.log(termAndConditions);
    console.log(personalData);

}





window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');

    






});


