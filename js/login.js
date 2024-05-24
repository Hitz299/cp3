const btn = document.querySelector("#btn-login");



listaUsuarios = [
{nome:"Nathan Magno gustavo consolo de almi", emailUsuario: "nathan.magno@email.com", senhaUsuario: "123456", idade:19, altura:1.70},
    {nome:"Alexandre Carlos", emailUsuario: "ale.carlos@email.com", senhaUsuario: "654321", idade:49, altura:3.40},
    {nome:"Mr. Fiap", emailUsuario: "fipas@email.com", senhaUsuario: "euestouaqui", idade:44, altura:1.52}
]

const validar = (email, senha)=>{

  

    for (let u = 0; u < listaUsuarios.length; u++) {
        
        if ((email.value == listaUsuarios[u].emailUsuario) && (senha.value == listaUsuarios[u].senhaUsuario))
        {
           localStorage.setItem("validado", JSON.stringify(listaUsuarios[u])); 
           
            window.location.href = "../html/index.html";
          

           return false;
        }
        else{
            console.log("a");
        }
     
    }   
        return false;
    }








