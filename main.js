//Recurso de alterar tamanho das fontes
var tamanho = 16;

function diminuir(){
  tamanho--;
  document.body.style.fontSize=tamanho+"px";
}

function aumentar(){
  tamanho++;
  document.body.style.fontSize=tamanho+"px";
}