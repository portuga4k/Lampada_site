function mudarElementos(){
    //declaração de variáveis
    let textoBotao = document.getElementById("botaoLigar").textContent;
    let imageDisplay = document.getElementById("imgLampadaOff");
    
    
    //intercalar entre os dois textos possíveis
    switch(textoBotao){
        case "Ligar":
            textoBotao.textContent = "Desligar";
        case "Desligar":
            textoBotao.textContent ="Ligar";
    }
    
    //mudar a imagem
    switch (imageDisplay){
        case "imgLampadaOff":
            imageDisplay = "imgLampadaOn";
        case "imgLampadaOn":
            imageDisplay = "imgLampadaOff";

    }

    //console.log("adoro cock");
}

//mudar o texto do botão quando é clicado
document.getElementById("botaoLigar").addEventListener("click", mudarElementos);
//document.getElementById("botaoLigar").addEventListener("click", mudarImagem);