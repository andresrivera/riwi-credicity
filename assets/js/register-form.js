//================================== CREATE NEW USER =========================================
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();


//let termAndConditions = document.getElementById("termAndConditions");
//let personalData = document.getElementById("personalData");







function addNewUser (){
    
    let btnRegister = document.getElementById('btnRegister');
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
    
    dataUser.array.forEach(element => {
        
    });

    fetch('http://localhost:3000/users', {
        method: "GET",
        headers: {'Content-type': 'application/json'}
    })
    .then((response) => response.json())
    .then(data => {
        // Buscamos si el documento del usuario ya existe en la base de datos
        const existingUser = data.find(usuario => usuario.document === document_number);

        if (existingUser) {
            console.log("El usuario ya existe en la base de datos. No podemos continuar.");
        } else {
            // Si no existe, creamos el nuevo usuario
            fetch('http://localhost:3000/users', {
                method: "POST",
                body: JSON.stringify(dataUser),
                headers: {'Content-type': 'application/json'}
            })
            .then((response) => response.json())
            .then(data =>{console.log(data);})


        }
    })

}

btnRegister.onclick = addNewUser


/* ========= FUNCIONES PARA OCULTAR ========*/

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}


const validarFormulario =(e)=>{

    switch (e.target.name) {
        case 'nombre':
            validarCampo(expresiones.usuario, e.target, 'nombre');

            break;
        
        case 'apellido':
            validarCampo(expresiones.usuario, e.target, 'apellido');
            break;
        
        case 'document':
            validarCampo(expresiones.telefono, e.target, 'documento');
            break;
        
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono');

            break;

        case 'email':
            validarCampo(expresiones.correo, e.target, 'correo');

            break;

        case 'password':
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;

        case 'password2':
            validarPassword2()

            break;
        
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('create_password');
	const inputPassword2 = document.getElementById('check_password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
})



formulario.addEventListener('submit',() => {

    //const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});