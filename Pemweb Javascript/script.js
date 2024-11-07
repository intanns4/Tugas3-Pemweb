// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    
    const usernameFeedback = document.getElementById("usernameFeedback");
    const emailFeedback = document.getElementById("emailFeedback");
    const passwordFeedback = document.getElementById("passwordFeedback");
    const confirmPasswordFeedback = document.getElementById("confirmPasswordFeedback");
  
    function showFeedback(input, feedbackElement, message) {
      feedbackElement.textContent = message;
      feedbackElement.style.display = message ? "block" : "none";
      input.classList.toggle("invalid", !!message);
      input.classList.toggle("valid", !message);
    }
  
    // Validasi username
    username.addEventListener("keyup", function () {
      const usernamePattern = /^[a-zA-Z0-9]{5,20}$/;
      const message = !usernamePattern.test(username.value)
        ? "Username harus 5-20 karakter dan alfanumerik."
        : "";
      showFeedback(username, usernameFeedback, message);
    });
  
    // Validasi email
    email.addEventListener("change", function () {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const message = !emailPattern.test(email.value)
        ? "Masukkan format email yang valid."
        : "";
      showFeedback(email, emailFeedback, message);
    });
  
    // Validasi password
    password.addEventListener("keyup", function () {
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const message = !passwordPattern.test(password.value)
        ? "Password harus minimal 8 karakter dan mengandung huruf dan angka."
        : "";
      showFeedback(password, passwordFeedback, message);
    });
  
    // Validasi konfirmasi password
    confirmPassword.addEventListener("input", function () {
      const message = confirmPassword.value !== password.value
        ? "Password tidak cocok."
        : "";
      showFeedback(confirmPassword, confirmPasswordFeedback, message);
    });
  
    // Validasi akhir saat submit
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah submit jika validasi gagal
  
      const isFormValid =
        !usernameFeedback.textContent &&
        !emailFeedback.textContent &&
        !passwordFeedback.textContent &&
        !confirmPasswordFeedback.textContent;
  
      if (isFormValid) {
        alert("Pendaftaran berhasil!");
        form.reset();
  
        [username, email, password, confirmPassword].forEach((input) => {
          input.classList.remove("valid");
        });
      } else {
        alert("Mohon perbaiki kesalahan di formulir.");
      }
    });
  });
  