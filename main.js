
alert("test")
function tocaSompom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listarDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listarDeTeclas.length){
    const instrumento = listarDeTeclas[contador].classList
        console.log (instrumento[1])
        listarDeTeclas[contador].onclick = function (){

        tocaSom(`#som_${instrumento[1]}`);
    };
    contador = contador + 1;
}