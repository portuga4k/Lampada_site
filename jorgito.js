function mudarTexto(){

    //declaração de variáveis
    var botao = document.getElementById("botaoLigar");
    var on = document.getElementById ("imgLampadaOn");
    var off = document.getElementById ("imgLampadaOff");
    
    //mudança do texto
    if(botao.value == "Desligar"){
  
        botao.value = "Ligar";
        on.style.visibility = "hidden";
        off.style.visibility = "visible";

    }else {

        botao.value = "Desligar";
        on.style.visibility = "visible";
        off.style.visibility = "hidden";

    } 
    //console.log("adoro cock");
}

function mudarImagem(){

    
    
}

document.getElementById("botaoLigar").addEventListener(mudarTexto, mudarImagem);

