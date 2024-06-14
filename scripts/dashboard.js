// check if user login the account the access of dashboard and otherwise can't access

var checkLogin = localStorage.getItem('accLogin');

if (checkLogin !== 'true') {
    document.body.style.display = "none";
    console.log("Access denied. Please log in to access the dashboard.");
}
