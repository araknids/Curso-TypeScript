class Cliente{

    nome: string;
    idade:number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá eu sou ${this.nome} e tenho ${this.idade} anos`;
    }
}

let valor: number = 29.90;
let joao: Cliente =  new Cliente("jao", 20);
let apresentacao = joao.apresentar();

console.log(apresentacao);