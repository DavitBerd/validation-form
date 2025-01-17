document.getElementById("validationForm").addEventListener("submit", A = (event) => {
    event.preventDefault()
    let isValid = true

    document.querySelectorAll(".error").forEach((error) => (error.textContent = ""))
    document.querySelectorAll(".invalid").forEach((field) => field.classList.remove("invalid"))
    document.querySelectorAll(".errorimage").forEach((img) => img.classList.remove("errorimage"))

    const username = document.getElementById("firstname").value.trim()
    if (!username) {
        document.getElementById("firstnameerror").textContent = "First Name cannot be empty"
        document.getElementById("firstname").classList.add("invalid")
        document.getElementById("errorimg1").classList.add("errorimage")
        isValid = false
    }
    const lastname = document.getElementById("lastname").value.trim()
    if (!lastname) {
        document.getElementById("lastnameerror").textContent = "Last Name cannot be empty"
        document.getElementById("lastname").classList.add("invalid")
        document.getElementById("errorimg2").classList.add("errorimage")
        isValid = false
    }
    const email = document.getElementById("email").value.trim()
    if (!email) {
        document.getElementById("emailError").textContent = "Email cannot be empty."
        document.getElementById("email").classList.add("invalid")
        document.getElementById("errorimg3").classList.add("errorimage")
        isValid = false
    }
    const password = document.getElementById("password").value.trim()
    if (!password) {
        document.getElementById("passwordError").textContent = "Password cannot be empty."
        document.getElementById("password").classList.add("invalid")
        document.getElementById("errorimg4").classList.add("errorimage")
        isValid = false
    }
})
