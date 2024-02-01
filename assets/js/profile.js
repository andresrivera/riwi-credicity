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

let totalMontoP = document.getElementById('totalMonto')
let totalCuotasP = document.getElementById('totalCuotas')
let valorCuotaP = document.getElementById('valorCuota')
let totalInteresesP = document.getElementById('totalIntereses')
let totalPagarP = document.getElementById('totalPagar')


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

btnPedirCredito.addEventListener('click', ()=>{
    
   /*  if (totalCuotasP.textContent === "1"){
        return totalDias = "30"
    }
    else if (totalCuotasP.textContent === "2"){
        return totalDias = "60"
    }
    else if (totalCuotasP.textContent === "3"){
        return totalDias = "90"
    }    */

    let infoCredit = {
        total_capital: totalMontoP.textContent,
        fecha_solicitud: hoy.toLocaleDateString(),
        //fecha_finalizacion: totalDias,
        cuotas: totalCuotasP.textContent,
        moneda: 'COP',
        cuotas_faltantes: totalCuotasP.textContent,
        valor_cuota: valorCuotaP.textContent,
        total_intereses: totalInteresesP.textContent,
        total_pagar: totalPagarP.textContent,
    }

    fetch('http://localhost:3002/loan_details',{
        method: "POST",
        body: JSON.stringify(infoCredit),
        headers: {'Content-type': 'application/json'}
    })
    .then((response)=>{response.json()})
    .catch(data =>{console.log(data);})
});

btnLogOut.addEventListener('click', ()=>{
    localStorage.removeItem('active')
})

function sesionOpen (){
    if (localStorage.getItem('active')==true){
        
    }

}
