  // Toggle between Sign In and Sign Up sections
  function toggleForms(form) {
    const signInSection = document.getElementById('signIn-section');
    const signUpSection = document.getElementById('signUp-section');

    if (form === 'signIn') {
        signInSection.style.display = 'block';
        signUpSection.style.display = 'none';
    } else if (form === 'signUp') {
        signInSection.style.display = 'none';
        signUpSection.style.display = 'block';
    }
}

// Sign Up functionality
document.querySelector("#signUp-section form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("signUpName").value.trim();
    const email = document.getElementById("signUpEmail").value.trim();
    const password = document.getElementById("signUpPassword").value;
    const rePassword = document.getElementById("signUpRePassword").value;

    if (password !== rePassword) {
        alert("Passwords do not match. Please re-enter your password.");
        return;
    }

    // Save user data to local storage
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Account created successfully!");

    // Switch to Sign In form
    toggleForms('signIn');
});

// Sign In functionality
document.querySelector("#signIn-section form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("signInEmail").value.trim();
    const password = document.getElementById("signInPassword").value;

    // Retrieve user data from local storage
    const userData = localStorage.getItem(email);
    if (!userData) {
        alert("No account found with this email. Please sign up.");
        return;
    }

    const user = JSON.parse(userData);
    if (user.password === password) {
        alert(`Welcome back, ${user.name}!`);
        // Redirect to a different page after successful login
        window.location.href = "After authentication.html"; // Replace with your target page
    } else {
        alert("Incorrect password. Please try again.");
    }
});