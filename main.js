//Menu de navegação
var content1 = document.getElementById("caixa1");
var content2 = document.getElementById("caixa2");
var content3 = document.getElementById("caixa3");
var content4 = document.getElementById("caixa4");

function mostrar1() {
	content1.style.display = "block";
	content2.style.display = "none";
	content3.style.display = "none";
	content4.style.display = "none";
}

function mostrar2() {
	content1.style.display = "none";
    content2.style.display = "block";
	content3.style.display = "none";
	content4.style.display = "none";
}

function mostrar3() {
	content1.style.display = "none";
    content2.style.display = "none";
	content3.style.display = "block";
	content4.style.display = "none";
}


function mostrar4() {
	content1.style.display = "none";
    content2.style.display = "none";
	content3.style.display = "none";
	content4.style.display = "block";
}

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











