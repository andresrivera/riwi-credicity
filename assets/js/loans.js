  /* FUNCIONES Y VARIABLES PARA LA CREACION DE LA TABLA */
  
  //let variable = localStorage.setItem("numerDocument","1000445131")

  let documentoDesdeLocal = localStorage.getItem("numberDocument");

  let tablaId = document.getElementById("credits_table");

fetch("http://localhost:3001/loan_details", { method: 'GET', headers: { "content-type": "application/json" } })
  .then(response => {return response.json() ;
  }).then(data=>{
    
      data.forEach(cliente => {
          //console.log(cliente.documento_cliente)
        if (documentoDesdeLocal==cliente.id) {
          // console.log(cliente.credit_data);
            console.log(cliente.id);
            let CreditosDelCliente = cliente.credit_data
            CreditosDelCliente.forEach(cada_credito => {
                let fila = document.createElement("tr");
                tablaId.appendChild(fila);

                let cellCapital = document.createElement("td");
                cellCapital.innerHTML= cada_credito.total_capital;
                fila.appendChild(cellCapital);

                let CellFechaSolicitud = document.createElement("td");
                CellFechaSolicitud.innerHTML= cada_credito.fecha_solicitud;
                fila.appendChild(CellFechaSolicitud);

                let CellFechaFinalizacion = document.createElement("td");
                CellFechaFinalizacion.innerHTML= cada_credito.fecha_finalizacion;
                fila.appendChild(CellFechaFinalizacion);

                let CellTotalPago = document.createElement("td");
                CellTotalPago.innerHTML= cada_credito.total_pagar;
                fila.appendChild(CellTotalPago);

                let CellCuotas = document.createElement("td");
                CellCuotas.innerHTML= cada_credito.cuotas
                fila.appendChild(CellCuotas);

                let CellFaltante = document.createElement("td");
                CellFaltante.innerHTML= cada_credito.faltante
                fila.appendChild(CellFaltante);

                let CellValorCuota = document.createElement("td");
                CellValorCuota.innerHTML= cada_credito.valor_cuota
                fila.appendChild(CellValorCuota);

                let CellEStado = document.createElement("td");
                CellEStado.innerHTML= cada_credito.estado
                fila.appendChild(CellEStado);

                
            })
        }
              
      }); 
  })

/* ==========FUNCION LA COLOCACION DEL NOMBRE============= */
let nombreDelUsuario = document.getElementById("NombreUsuario")

fetch("http://localhost:3000/users", { method: 'GET', headers: { "content-type": "application/json" } }
)
.then(response => {return response.json() ;
}).then(data=>{
  data.forEach((usuario)=>{

    if(documentoDesdeLocal==usuario.document){
      nombreDelUsuario.innerHTML = usuario.name + " " + usuario.last_name;
    }
  })
})


// ============ REMOVER ITEMS DEL LOCAL PARA CERRAR SESION ==================
let btnLogOut = document.getElementById('btnLogOut');
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

