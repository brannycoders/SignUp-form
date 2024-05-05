document.getElementById('signUp-form')addEventListener('submit', function(event) {
    var username =
    document.getElementById('username').Value;
    var email =
    document.getElementById('email'). Value;
    var password =
    document.getElementById('password'). Value;
    if (!username || !email|| ! password) {
        alert(please in all the fills);
        event.preventDefault();
    }
});