let attempt = 3;
function masuk() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "najmitaqiy" && password == "JAVASCRIPT") {
        alert("Login Success");
        window.location = "login-succes.html";

    } else {
        attempt--;
        alert("Gagal Login");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;

        }
    }
}
