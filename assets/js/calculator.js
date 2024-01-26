







const informationCredit = document.getElementById('valueSee')
const rangeCredit = document.getElementById('range')    

rangeCredit.addEventListener('input', function(){

    let COP = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP',
    });

    informationCredit.textContent = COP.format(rangeCredit.value);
}) 