class Funcionario{
    nome:string;
    salario:number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    pagarImposto(taxa: number = 7.5){
        console.log(`Pagando ${this.salario * taxa / 100} de imposto`);
    }

}

class Secretario extends Funcionario{

}

let sara = new Secretario("Sara", 2000);
sara.pagarImposto();