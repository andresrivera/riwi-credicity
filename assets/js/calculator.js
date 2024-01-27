

const informationCredit = document.getElementById('valueSee')
const rangeCredit = document.getElementById('range')
const totalCredit = document.getElementById('totalMonto') 
const totalCuotas = document.getElementById('totalCuotas')
const btnSimularCredito = document.getElementById('btnSimularCredito')
const valorCuota = document.getElementById('valorCuota')
const totalIntereses = document.getElementById('totalIntereses')
const porcentajeIntereses = 0.0429  



//SEE CUOTAS CREDIT
//totalCuotas.innerHTML = document.cuotas.value
  rangeCredit.addEventListener('input', function () {

    let COP = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP',
    });

    informationCredit.textContent = COP.format(rangeCredit.value);
    totalCredit.textContent = COP.format(rangeCredit.value)
    }) 

function simularCredito() {

    //mostrar cuotas
    let cuotasCheckbox = document.querySelector('input[name=cuotasCredito]:checked').value;
    totalCuotas.textContent = cuotasCheckbox

    //VALOR CUOTA
    let COP = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',    
    });
    let valorIntereses = parseFloat(rangeCredit.value) * porcentajeIntereses
    let valorCuotaCredito = (valorIntereses + parseFloat(rangeCredit.value)) / cuotasCheckbox
    valorCuota.textContent = COP.format(valorCuotaCredito)
    
    //VALOR INTERESES
    //if (cuotasCheckbox === '1')
    totalIntereses.innerText = COP.format (valorIntereses)
}

btnSimularCredito.onclick = simularCredito

