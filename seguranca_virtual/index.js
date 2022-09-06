import convidadosJean from './dados/dados.js';


function verificarEntrada (convidadosJean) {

   nomeConvidados = document.getElementById("nome").value;
   if (convidadosJean.includes(nomeConvidados)){
     document.getElementById("permissao").innerHTML = "Você pode entrar!"
   }else{
    document.getElementById("permissao").innerHTML = "Você não pode entrar!"
   }

};
