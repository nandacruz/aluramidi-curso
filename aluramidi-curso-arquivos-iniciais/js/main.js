/* Exercício 2
function teclaPom(){
    alert('Fui clicado');
}; */


function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    //o primeiro elemento refere-se a nulo
    if(elemento && elemento.localName === 'audio'){  
        elemento.play();       
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

for(let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //Template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    

    //Função anônima
    tecla.onclick = function () {
        tocaSom(idAudio);
        
    }    

    tecla.onkeydown = function (evento){

        if(evento.code === 'Space' || evento.code === 'Enter' ){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
