document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('button added');

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})
