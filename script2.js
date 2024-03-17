document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "pi" && password === "11111111") {
      window.location.href = "home.html";
    } else {
      document.getElementById("error-msg").textContent =
        "Incorrect username or password.";
    }
  });
