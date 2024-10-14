document.getElementById('add-money-button')
    .addEventListener('click', function (event) {
        console.log('Add money button added');
        event.preventDefault();

        const moneygive = document.getElementById('input-give-amount').value;
        const moneygivenumber = parseFloat(moneygive);
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(inputPinNumber);

        if (inputPinNumber === "1234") {
            const currentBalance = document.getElementById('main-balance').innerText;
            const balanceNumber = parseFloat(currentBalance);

            const newBalance = moneygivenumber + balanceNumber;

            document.getElementById('main-balance').innerText = newBalance;
        }
        else {
            alert('wrong information');
        }
    })

document.getElementById('cashout-button')
    .addEventListener('click', function name(event) {
        event.preventDefault();



        const cashoutpin = document.getElementById('cashout-pin').value;
        const cashoutAmount = document.getElementById('cashout-amount').value;
        const finalcashoutamount = parseFloat(cashoutAmount);

        if (cashoutpin === '12345') {
            const balance = document.getElementById('main-balance').innerText;
            const finalBalance = parseFloat(balance);
            

            const cashmoney = finalBalance - finalcashoutamount;
            console.log(cashmoney);


            document.getElementById('main-balance').innerText = cashmoney;

        }
        else {
            alert('wrong input information');
        }

    })