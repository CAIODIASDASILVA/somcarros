

function tocaSomPom(){
    document.querySelector('#som-tecla-pom').play()
}
alert("teste")
const listarDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listarDeTeclas.Length){
    listarDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
}