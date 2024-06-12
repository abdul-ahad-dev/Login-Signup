
// create account javascript



let createAcc = document.getElementById('createAcc');



// get user first name
var firstName = document.getElementById('first-name').value;
    
// get user last name
var lastName = document.getElementById('last-name').value;

// get user email
var inputEmail = document.getElementById('mail').value;

// get user phone number
var inputPhoneNo = document.getElementById('phone-no').value;

// get user password
var inputPasswordOne = document.getElementById('password-1')

// get user password
var inputPasswordTwo = document.getElementById('password-1')



function submit() {
    
    localStorage.setItem('first name', firstName)
    localStorage.setItem('last name', lastName)
    localStorage.setItem('Email', JSON.stringify(inputEmail))
    localStorage.setItem('Phone no', inputPhoneNo)
    localStorage.setItem('password', JSON.stringify(inputPasswordOne))



}


if (isNaN(firstName)) {
    console.log('abc');
    submit()
}
