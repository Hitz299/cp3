let user = JSON.parse(localStorage.getItem("validado"));
console.log(`essa é a porra do nome ${user.nome}`);

const txtnome = document.querySelector(".txtNome");
const txtIdade = document.querySelector(".txtIdade");
const txtAltura = document.querySelector(".txtAltura");

txtnome.textContent = user.nome;
txtIdade.textContent = user.idade;
txtAltura.textContent = user.altura;