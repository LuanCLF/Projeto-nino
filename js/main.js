// document.querySelector("#mariaImg").src = "imagens/mariaFoto6.jpg";



 let imagens = ["imagens/mariaFoto0.jpg", "imagens/mariaFoto1.jpg", "imagens/mariaFoto2.jpg", "imagens/mariaFoto3.jpg", "imagens/mariaFoto4.jpg", "imagens/mariaFoto5.jpg", "imagens/mariaFoto6.jpg", "imagens/mariaFoto7.jpg"]

 let prox = 0;
 let maria = document.querySelector("#mariaImg");

function trocarImg() {
    prox++;
      
    if (prox >= imagens.length) {
      prox = 0;
    }
    
    maria.src = imagens[prox];
}

document.querySelector("#button").onclick = function () {
    trocarImg();
};
