// step 1 : add click event handler with the submit button 
document.getElementById('submit-btn').addEventListener('click', function () {
    // step 2 : get the emaill adress inside the email input field
    // always remember to get text from input use value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 : get user password
    const userField = document.getElementById('user-pass');
    const password = userField.value;

    // danger: do not varify email password on the client side 
    // step 4 : varify email passsss 

    if (email === 'sontan@baap.com' && password === 'secret') {
        // button redirect one page to another page
        window.location.href = 'bank.html';
    }
    else {
        alert('Please provide valid email & password!')
    }
})
