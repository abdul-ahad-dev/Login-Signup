
// login account javascript


var loginButton = document.getElementById('login-btn');

localStorage.setItem('accLogin', false)

function LoginAccount() {
    let userMail = document.getElementById('user-mail').value;
    let userPassword = document.getElementById('user-password').value;

    console.log(userMail);

    let password = localStorage.getItem('password')
    let mail = localStorage.getItem('Email');

    console.log();

    if(userMail === mail.slice(1, -1) && userPassword === password.slice(1, -1)){
        localStorage.setItem('accLogin', true)
        window.location.href = 'dashboard.html'
    } else {
        if (userMail !== mail.slice(1, -1)) {
            alert("Wrong mail")
        } else {
            alert("Wrong Password")
        }
    }
}


loginButton.addEventListener('click', LoginAccount)
