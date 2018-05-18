interface Pessoa{
    idade: number;
    sexo?: string; // campo nao obrigatorio
}


function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);
 
}

let joaoMarcos = {nome: 'Jão', idade: 23}

imprimirIdade(joaoMarcos);