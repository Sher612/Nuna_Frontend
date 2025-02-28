document.addEventListener("DOMContentLoaded", function() {
     // Get button elements
     const whyNunaButton = document.getElementById("whyNunaButton");
     const registerButton = document.getElementById("registerButton");
     const loginButton = document.getElementById("loginButton");
 
     // Add event listeners to redirect users
     if (whyNunaButton) {
         whyNunaButton.addEventListener("click", function () {
             window.location.href = "whynuna.html"; // Navigate to Why Nuna page
         });
     }
 
     if (registerButton) {
         registerButton.addEventListener("click", function () {
             window.location.href = "register.html"; // Navigate to Register page
         });
     }
 
     if (loginButton) {
         loginButton.addEventListener("click", function () {
             window.location.href = "login.html"; // Navigate to Login page
        });
    }

     // Get the home button element
     const homeButton = document.getElementById("homeButton");

     if (homeButton) {
         homeButton.addEventListener("click", function () {
             window.location.href = "index.html"; // Redirect to homepage
         });
     }
});

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get values from input fields
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // REGEX PATTERNS (Match what’s in HTML)
        const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // ERROR MESSAGES
        if (!usernamePattern.test(username)) {
            alert("⚠️ Username must be 3-15 characters long, containing only letters, numbers, or underscores.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("⚠️ Please enter a valid email address.");
            return;
        }

        if (!passwordPattern.test(password)) {
            alert("⚠️ Password must be at least 8 characters and include at least 1 number.");
            return;
        }

        // SUCCESS MESSAGE & REDIRECT
        alert("✅ Registration Successful! Redirecting to login page...");
        window.location.href = "login.html"; // Redirect to login page
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("homeButton");

    if (homeButton) {
        homeButton.addEventListener("click", function () {
            window.location.href = "index.html"; // Redirect to homepage
        });
    }
});