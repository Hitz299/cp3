listaUsuarios = [
{nome:"Nathan Magno", emailUsuario: "nathan.magno@email.com", senhaUsuario: "123456", idade:19, altura:1.70},
{nome:"Dona Jo", emailUsuario: "dona.jo@email.com", senhaUsuario: "horadocafe", idade: 59, altura: 1.65},
{nome:"Mr. Fiap", emailUsuario: "fipas@email.com", senhaUsuario: "euestouaqui", idade: 44, altura: 1.52}
]



const validar = (email, senha)=>{

    let msg = document.querySelector(".valida");

    for (let u = 0; u < listaUsuarios.length; u++) {
        
        if ((email.value == listaUsuarios[u].emailUsuario) && (senha.value == listaUsuarios[u].senhaUsuario))
        {
            localStorage.setItem("validado", JSON.stringify(listaUsuarios[u])); 
            msg.setAttribute("class", "sucesso");
            msg.textContent = "Login realizado com Sucesso!"
            document.querySelector("form").reset();

            setTimeout(()=>{
            window.location.href = "../html/index.html";
            }, 5000);
           
          

           return false;
        }
        else{
            msg.setAttribute("class", "negado");
            msg.textContent = "Email ou senha inválidos!"
            document.querySelector("form").reset();
        }
     
    }   
        return false;
    }