
// create account javascript

let createAcc = document.getElementById('createAcc');

function submit()
{
    // get user first name
    var firstName = document.getElementById('first-name').value;
    // get user last name
    var lastName = document.getElementById('last-name').value;
    // get user email
    var inputEmail = document.getElementById('mail').value;
    // get user phone number
    var inputPhoneNo = document.getElementById('phone-no').value;
    // get user password
    var inputPasswordOne = document.getElementById('password-1').value
    // get user password
    var inputPasswordTwo = document.getElementById('password-2').value


        // check if input values are not empty or null
    if (firstName && lastName && inputEmail && inputPhoneNo && inputPasswordOne && inputPasswordTwo) {
        // check password length
        if (inputPasswordOne.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // check phone number length
        if (inputPhoneNo.length!== 11) {
            alert('Phone number must be 11 digits long');
            return;
        }

        // check email format
        if (!inputEmail.endsWith('@gmail.com')) {
            alert('Email must be a Gmail address');
            return;
        }

        // check if passwords match
        if (inputPasswordOne!== inputPasswordTwo) {
            alert('Passwords do not match');
            return;
        }

        // store data in local storage
        localStorage.setItem('first name', firstName);
        localStorage.setItem('last name', lastName);
        localStorage.setItem('Email', JSON.stringify(inputEmail));
        localStorage.setItem('Phone no', inputPhoneNo);
        localStorage.setItem('password', JSON.stringify(inputPasswordOne));

        alert('Account created successfully!');

    } else {
        alert('Please fill in all fields');
    }
}


createAcc.addEventListener('click', submit)

