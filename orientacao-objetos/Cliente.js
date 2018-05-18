var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1 eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
var valor = 29.90;
var joao = new Cliente("jao", 20);
var apresentacao = joao.apresentar();
console.log(apresentacao);
