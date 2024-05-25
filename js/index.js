const btnlogout = document.querySelector("#btnLogout");

let user = JSON.parse(localStorage.getItem("validado"));
console.log(`essa é a porra do nome ${user.nome}`);

const txtnome = document.querySelector(".txtNome");
const txtBoas = document.querySelector("#boas");
const txtIdade = document.querySelector(".txtIdade");
const txtAltura = document.querySelector(".txtAltura");

txtBoas.textContent = `Boas vindas ${user.nome}`
txtnome.textContent = `Nome: ${user.nome}`;
txtIdade.textContent = `Idade: ${user.idade}`;
txtAltura.textContent = `Altura: ${user.altura}`;

btnlogout.addEventListener("click",()=>{

    localStorage.removeItem("validado");
    window.location.href = "../html/login.html"

});