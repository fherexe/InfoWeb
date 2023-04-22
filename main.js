//Menu de navegação
var content1 = document.getElementById("caixa1");
var content2 = document.getElementById("caixa2");
var content3 = document.getElementById("caixa3");
var content4 = document.getElementById("caixa4");


function mostrar1() {
	if (content1.style.display === "none"){
		content1.style.display = "block";
		content2.style.display = "none";
		content3.style.display = "none";
		content4.style.display = "none";
	}
 	else {
		content1.style.display = "block";
	}
}

function mostrar2() {
	if (content2.style.display === "none") {
		content1.style.display = "none";
    	content2.style.display = "block";
		content3.style.display = "none";
		content4.style.display = "none";
	}

	else {
		content2.style.display = "block";
	}
}

function mostrar3() {
	if (content3.style.display === "none") {
		content1.style.display = "none";
    	content2.style.display = "none";
		content3.style.display = "block";
		content4.style.display = "none";
	}

	else {
		content3.style.display = "block";
	}
}

function mostrar4() {
	if (content4.style.display === "none") {
		content1.style.display = "none";
    	content2.style.display = "none";
		content3.style.display = "none";
		content4.style.display = "block";
	}

	else {
		content4.style.display = "block";
	}
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











