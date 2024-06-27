let email = document.getElementById("email_field");
let password = document.getElementById("password_field");
let login = document.getElementById("login");
let contentDiv = document.getElementById("loginForm");

login.addEventListener("click", () => {
  if (email.value === "admin@gmail.com" && password.value === "1234") {
    let serverData = (window.location.href = "../index.html");
    contentDiv.innerHTML = serverData;
  } else {
    alert("Неверный логин или пароль");
  }
});
