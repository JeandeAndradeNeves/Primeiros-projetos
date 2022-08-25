function verificarEntrada () {
   nomeConvidados = document.getElementById("nome").value;
   convidadosJean = ["Ana","Lyliane","Natalia","Geova","Itamar","Yago","Francisca","Geraldo","Joice","Jamile","Hellen"];
   if (convidadosJean.includes(nomeConvidados)){
     document.getElementById("permissao").innerHTML = "Você pode entrar!"
   }else{
    document.getElementById("permissao").innerHTML = "Você não pode entrar!"
   }
};