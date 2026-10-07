password = document.getElementById('password')
confirmPassword = document.getElementById ('confirmPassword')
passwordAlert = document.getElementById('passwordAlert')

confirmPassword.addEventListener('input', () =>{{
if (password.value != confirmPassword.value) {
    passwordAlert.classList.toggle('error')
} else {
passwordAlert.classList.remove('error') 
}}})
