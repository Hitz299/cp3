const btn = document.querySelector("#btn-login");



listaUsuarios = [
{nome:"Nathan Magno", emailUsuario: "nathan.magno@email.com", senhaUsuario: "123456"},
    {nome:"Alexandre Carlos", emailUsuario: "ale.carlos@email.com", senhaUsuario: "654321"},
    {nome:"Mr. Fiap", emailUsuario: "fipas@email.com", senhaUsuario: "euestouaqui"}
]

const validar = (email, senha)=>{

  

    for (let u = 0; u < listaUsuarios.length; u++) {
        
        if ((email.value == listaUsuarios[u].emailUsuario) && (senha.value == listaUsuarios[u].senhaUsuario))
        {
            
           
            window.location.href = "../html/index.html";
          

           return false;
        }
        else{
            console.log("a");
        }
     
    }   
        return false;
    }








