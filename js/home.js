document.getElementById('add-money-button')
    .addEventListener('click', function (event) {
        console.log('Add money button added');
        event.preventDefault();

        const moneygive = document.getElementById('input-give-amount').value;
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(inputPinNumber);
    })