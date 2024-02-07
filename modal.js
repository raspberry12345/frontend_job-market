"use strict";
const signup = document.getElementById("signUp");
const login = document.getElementById("login");
const modalSignUp = document.getElementById("modalSignUp");
const modalLogin = document.getElementById("modalLogin");
const closeModalSignUp = document.getElementById("closeModal");
const closeModalLogin = document.getElementById("closeModalLogin");
const praktikantBtn = document.getElementById("praktikantBtn");
const companyBtn = document.getElementById("companyBtn");
const chooseUser = document.querySelector(".chooseUser");
const loginContainer = document.getElementById("formContainer");
const formContainer = document.querySelector(".formContainer");
const selectMember = document.querySelector("input[type=hidden]");
signup.addEventListener("click", () => {
    modalSignUp.showModal();
});
login.addEventListener("click", () => {
    loginContainer.style.display = "block";
    modalLogin.showModal();
});
closeModalSignUp.addEventListener("click", () => {
    chooseUser.style.display = "flex";
    formContainer.style.display = "none";
    // Assuming you have a 'warning' element declared somewhere in your HTML
    // and assigned to the 'warning' variable.
    // If not, you should declare it before using it.
    const warning = document.getElementById("warning");
    warning.innerText = " ";
    modalSignUp.close();
});
closeModalLogin.addEventListener("click", () => {
    chooseUser.style.display = "flex";
    formContainer.style.display = "none";
    // Assuming you have a 'warning' element declared somewhere in your HTML
    // and assigned to the 'warning' variable.
    // If not, you should declare it before using it.
    const warning = document.getElementById("warning");
    warning.innerText = " ";
    modalLogin.close();
});
praktikantBtn.addEventListener("click", () => {
    chooseUser.style.display = "none";
    formContainer.style.display = "block";
    selectMember.name = "internship";
});
companyBtn.addEventListener("click", () => {
    chooseUser.style.display = "none";
    formContainer.style.display = "block";
    selectMember.name = "company";
});