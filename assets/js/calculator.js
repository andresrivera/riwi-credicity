const informationCredit = document.getElementById('valueSee')
const rangeCredit = document.getElementById('range')
const totalCredit = document.getElementById('totalMonto') 
const totalCuotas = document.getElementById('totalCuotas')
const btnSimularCredito = document.getElementById('btnSimularCredito')
const valorCuota = document.getElementById('valorCuota')
const totalIntereses = document.getElementById('totalIntereses')
const totalPagarCredito = document.getElementById('totalPagar')
const porcentajeIntereses = 0.0429  


const formCalculator = document.getElementById('formCalculator')
//SEE CUOTAS CREDIT

rangeCredit.addEventListener('input', function () {

    let COP = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP',
    });

    informationCredit.textContent = COP.format(rangeCredit.value);
    totalCredit.textContent = COP.format(rangeCredit.value)
}) 

formCalculator.addEventListener('change', function simularCredito() {

    //mostrar cuotas
    let cuotasCheckbox = document.querySelector('input[name=cuotasCredito]:checked').value;
    totalCuotas.textContent = cuotasCheckbox

    //VALOR CUOTA
    let COP = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',    
    });
    let valorIntereses = parseFloat(rangeCredit.value) * porcentajeIntereses * cuotasCheckbox
    let valorCuotaCredito = (valorIntereses + parseFloat(rangeCredit.value)) / cuotasCheckbox
    let totalPagarCredito = parseFloat(rangeCredit.value) + valorIntereses
    
    valorCuota.textContent = COP.format(valorCuotaCredito)
    totalIntereses.innerText = COP.format (valorIntereses)
    totalPagar.textContent = COP.format(totalPagarCredito)
    //activar btn del modal
    btn()
}) 



