//booelan
var estaPago = true;
//number
var idade = 20;
var valor = 20.99;
//string
var empresa = 'Rodrigo';
var nome = "joão";
//template string
console.log("Ol\u00E1 meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
//arrays
var notas = [8, 6, 9];
//tuplas
var alunos = ["jão", 10];
console.log(alunos[0]);
console.log(alunos[1]);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
var corFundo = Cor.Verde;
//any
var algumvalor = 4;
algumvalor = "é string";
algumvalor = true;
// void 
function alerta() {
    alert("teste");
}
