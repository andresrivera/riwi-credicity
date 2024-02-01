
  let variable = localStorage.setItem("numerDocument","1000445131")

  let documentoDesdeLocal = localStorage.getItem("numerDocument");

  let tablaId = document.getElementById("credits_table");

fetch("http://localhost:3000/loan_details", { method: 'GET', headers: { "content-type": "application/json" } }
  )
  .then(response => {return response.json() ;
  }).then(data=>{

      data.forEach(cliente => {
          //console.log(cliente.documento_cliente)
        if (documentoDesdeLocal==cliente.documento_cliente) {
          // console.log(cliente.credit_data);
            console.log(cliente.documento_cliente);
            let CreditosDelCliente = cliente.credit_data
            CreditosDelCliente.forEach(cada_credito => {
                let fila = document.createElement("tr");
                tablaId.appendChild(fila);

                let cellCapital = document.createElement("td");
                cellCapital.innerHTML= cada_credito.total_capital;
                fila.appendChild(cellCapital);

                let CellFechaSolicitud = document.createElement("td");
                CellFechaSolicitud.innerHTML= cada_credito.fecha_inicio;
                fila.appendChild(CellFechaSolicitud);

                let CellFechaFinalizacion = document.createElement("td");
                CellFechaFinalizacion.innerHTML= cada_credito.fecha_finalizacion;
                fila.appendChild(CellFechaFinalizacion);

                let CellTotalPago = document.createElement("td");
                CellTotalPago.innerHTML= cada_credito.total_a_pagar;
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


  fetch("http://localhost:3000/loan_details", { method: 'GET', headers: { "content-type": "application/json" } }
  )
  .then(response => {return response.json() ;
  }).then(data=>{})

