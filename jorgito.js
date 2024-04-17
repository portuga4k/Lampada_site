function mudarTexto(){

    //declaração de variáveis
    var botao = document.getElementById("botaoLigar");
    
    //mudança do texto
    if(botao.value == "Desligar"){
  
        botao.value = "Ligar";

    }else {

        botao.value = "Desligar";

    } 
    //console.log("adoro cock");
}

function mudarImagem(){

    
    
    
}

//mudar o texto do botão quando é clicado

document.getElementById("botaoLigar").addEventListener("click", mudarImagem);