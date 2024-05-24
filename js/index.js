let user = JSON.parse(localStorage.getItem("validado"));
console.log(`essa é a porra do nome ${user.nome}`);

const txtnome = document.querySelector(".txtNome");
const txtIdade = document.querySelector(".txtIdade");
const txtAltura = document.querySelector(".txtAltura");

txtnome.textContent = `Nome: ${user.nome}`;
txtIdade.textContent = `Idade: ${user.idade}`;
txtAltura.textContent = `Altura: ${user.altura}`;