document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const captchaCode = document.getElementById("captchaCode");
    const captchaInput = document.getElementById("captchaInput");
    const refreshCaptcha = document.getElementById("refreshCaptcha");
    const message = document.getElementById("message");

    // Mock correct username and password
    const correctUsername = "vishnu";
    const correctPassword = "1234";

    // Generate a new captcha
    function generateCaptcha() {
        const randomString = Math.random().toString(36).substring(2, 7).toUpperCase();
        captchaCode.value = randomString; // Use value for input field
    }

    // Initialize the captcha
    generateCaptcha();

    // Refresh captcha
    refreshCaptcha.addEventListener("click", generateCaptcha);

    // Toggle password visibility
    togglePassword.addEventListener("click", () => {
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });

    // Handle form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const captcha = captchaInput.value.trim().toUpperCase();

        // Validate username
        if (username !== correctUsername) {
            message.className = "error";
            message.textContent = "Incorrect username. Please try again.";
            return;
        }

        // Validate password
        if (password !== correctPassword) {
            message.className = "error";
            message.textContent = "Incorrect password. Please try again.";
            return;
        }

        // Validate captcha
        if (captcha !== captchaCode.value) {
            message.className = "error";
            message.textContent = "Invalid captcha. Please try again.";
            return;
        }

        // Simulate successful login
        message.className = "success";
        message.textContent = "Login successful!";
    });
});
