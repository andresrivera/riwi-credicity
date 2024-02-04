// document.addEventListener("DOMContentLoaded", function() {
//     // Obtener el valor de "id" del objeto en Local Storage
//     const userId = localStorage.getItem('id');
//     // solicitud Fetch para obtener los datos de "clientes.json"
//     fetch('./data/clientes.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('No se pudo cargar el archivo JSON.');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Buscar el objeto en el JSON que coincida con el "id" recuperado
//         const user = data.users.find(user => user.id === userId);
//         if (user) {
//             // Capturar la información requerida del objeto encontrado
//             const firstName = user.first_name;
//             const lastName = user.last_name;
//             /*const email = user.email;
//             const country = user.country;
//             const state = user.state;
//             const city = user.city;*/
         
//             document.getElementById('first_name').textContent = firstName;
//             document.getElementById('last_name').textContent = lastName;
//            /* document.getElementById('email').textContent = email;
//             document.getElementById('country').textContent = country;
//             document.getElementById('state').textContent = state;
//             document.getElementById('city').textContent = city;*/
//         } else {
//             console.error('No se encontró un usuario con el ID proporcionado.');
//         }
//     })
//     .catch(error => {
//         console.error('Se produjo un error al obtener los datos del archivo JSON:', error);
//     });
// }); 


let btnPedirCredito = document.getElementById('btnPedirCredito')
let btnEnviar = document.getElementById('btnEnviar')
let btnLogOut = document.getElementById('btnLogOut')

//==== DATOS DEL CREDTIO
let totalMontoP = document.getElementById('totalMonto')
let totalCuotasP = document.getElementById('totalCuotas')
let valorCuotaP = document.getElementById('valorCuota')
let totalInteresesP = document.getElementById('totalIntereses')
let totalPagarP = document.getElementById('totalPagar');

//===== DATOS DE LA CUENTA DE BANCO
let account_number = document.getElementById('numberAccount');
let account_type = document.getElementById('selectAccount');
let account_holder_name = document.getElementById('holderAccount')
let client_id = document.getElementById('idUser');
let entity_finance = document.getElementById('selectBank')


//agregar el id del cliente al modal
fetch('http://localhost:3000/users')
.then (response => response.json())
.then (() =>{
    let numberId = document.getElementById('idUser')
    let id = localStorage.getItem('numberDocument')
    numberId.value = id;
});

//obtener fecha de hoy
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();

/* ============== ENVIAR DATOS A LA BASE DE DATOS LOAN_DETAILS ============= */

btnEnviar.addEventListener('click', (event)=>{
    event.preventDefault();
    event.stopPropagation();

let documentUser = localStorage.getItem('numberDocument')
/* let numberDocument = {
    id:documentUser
}
fetch(`http://localhost:3001/loan_details`,{
        method: "POST",
        body: JSON.stringify(numberDocument),
        headers: {'Content-type': 'application/json'}
    })
    .then((response)=>{response.json()})
    .then(data =>{
    }) */

fetch("http://localhost:3001/loan_details")
    .then(r => r.json())
    .then(d => {
        resultado = d.filter(function(element){
            return element.id == documentUser
        });
        nuevo_credito ={
            total_capital: totalMontoP.textContent,
            fecha_solicitud: hoy.toLocaleDateString(),
            cuotas: totalCuotasP.textContent,
            moneda: 'COP',
            cuotas_faltantes: totalCuotasP.textContent,
            valor_cuota: valorCuotaP.textContent,
            total_intereses: totalInteresesP.textContent,
            total_pagar: totalPagarP.textContent
        }
        if(resultado.length > 0){
            //start
            
            fetch (`http://localhost:3001/loan_details/${documentUser}`)
            .then(response=>response.json())
            .then(data=>{
                //console.log(data);
                if(data != ""){
                    data.credit_data.push(nuevo_credito);
                    //creo un nuevo objeto
                    nuevo_registro ={
                        credit_data : data.credit_data
                    }
                
                    fetch(`http://localhost:3001/loan_details/${(documentUser)}`,{
                    method: "PATCH",
                    body : JSON.stringify(nuevo_registro),
                    headers:{
                        "Content-Type" : "application/json"
                    }
                    })
                    .then(r => r.json())
                    .then(d => {
                        
                    }); 
                } });
                // end
        }else{
            nuevo_registro ={
                id: documentUser,
                credit_data : [nuevo_credito]
            }
            fetch(`http://localhost:3001/loan_details`,{
            method: "POST",
            body : JSON.stringify(nuevo_registro),
            headers:{"Content-Type" : "application/json"}
            })
            .then(r => r.json())
            .then(d => {
                
            }); 
        }
    })

//======== ENVIAR INFORMACION A BD ACCOUNT ========
    let dataAccount = {
        account_number:account_number.value ,
        account_type: account_type.value,
        account_holder_name: account_holder_name.value,
        client_id: client_id.value,
        entity_finance: entity_finance.value
    }
    fetch ('http://localhost:3002/accounts')
    .then ((response) => response.json())
    .then (data => {
            resultado = data.filter(function(element){
                return (element.account_number == account_number.value && 
                    element.client_id == documentUser)
            });
            if (resultado != ""){
                console.log('ya existe la cuenta');
            }
            else{
                fetch ('http://localhost:3002/accounts',{
                    method: "POST",
                    body: JSON.stringify(dataAccount),
                    headers: {'Content-type': 'application/json'}
                })
                .then ((response) => response.json())
            }
    })//cierre enviar info a la bd account
    
    //nuevo elemento
    let newCredit = document.getElementById('newCredit');
    newCredit.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <a href="">Tienes un credito activo</a><br> Gracias por confiar en nosotros.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
    newCredit.appendChild(newCredit)

});//cierra el evento de btnEnviar

//======= HABILITAR EL BOTON DE ENVIAR DEL MODAL CUANDO LOS CAMPOS ESTEN LLENOS
let modalAccount = document.getElementById('modalAccount');
btnEnviar.setAttribute('disabled', 'disabled');

// EVENTOS DE LOS CAMPOS REQUERIDOS
account_number.addEventListener('input', habilitarBtn);
account_type.addEventListener('input', habilitarBtn);
account_holder_name.addEventListener('input', habilitarBtn);
entity_finance.addEventListener('input', habilitarBtn);

// HABILIAR O DESHABILITAR EL BOTON DE ENVIAR
function habilitarBtn() { 
    if ( account_number.value != "" && entity_finance.value != "" && 
    account_holder_name.value !="" && account_type.value != "") {
        btnEnviar.removeAttribute('disabled');
    } else {
        btnEnviar.setAttribute('disabled', 'disabled');
    }
}
habilitarBtn();

//========== HABILITAR BOTON QUE ABRE EL MODAL DE CUENTAS CUANDO LOS CAMPOS ESTEN LLENOS =============
btnPedirCredito.setAttribute('disabled', 'disabled');
function btnModalOpen () {
    if (totalMontoP.innerText != ""){
        btnPedirCredito.removeAttribute('disabled');
        
    }else{

        console.log("Esto esta vacio !!!!!!!");
    }
}

// ============ REMOVER ITEMS DEL LOCAL PARA CERRAR SESION ==================
btnLogOut.addEventListener('click', ()=>{
    localStorage.removeItem('active')
    localStorage.removeItem('numberDocument');
    localStorage.removeItem('id')
})

function sesionOpen (){
    let sesion = localStorage.getItem('active');
    if (!sesion){
        location.href = 'login.html'
    } 
}
sesionOpen()

//convertir datos a number

// totalMontoP.addEventListener('input', ()=>{
//     let COP = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'COP',
//     });
//     let formateada = COP.format(parseFloat(totalMontoP.textContent.replace(/[^0-9.-]+/g, '')));
//     console.log(formateada);
    
//     let cantidadNumerica = parseFloat(formateada.replace(/[^0-9.-]+/g, ''));
//     console.log(cantidadNumerica);
// })



