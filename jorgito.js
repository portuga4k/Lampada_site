


function mudarTexto(){

    //declaração de variáveis
    let botao = document.getElementById("botaoLigar");
    
    //mudança do texto
    if(botao.value == "Desligar"){
  
        botao.value = "Ligar";
        
    }else {

        botao.value = "Desligar";

    } 
    //console.log("adoro cock");
}

function mudarImagem(){

    let imagens = document.getElementById("lampada");
    

    if(imagens.src.match("bulb-on.png")){
       
        imagens.src = "bulb-off.png";
        
        

    }else {

        imagens.src = "bulb-on.png";
    }
      
    
}



