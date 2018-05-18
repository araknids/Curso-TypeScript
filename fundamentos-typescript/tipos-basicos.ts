
//booelan
let estaPago: boolean = true;

//number
let idade: number = 20;
let valor: number = 20.99;

//string
let empresa: string = 'Rodrigo';


let nome:string = "joão";
//template string
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`);

//arrays
let notas: number[] = [8,6,9];

//tuplas
let alunos: [string, number]= ["jão", 10]
console.log(alunos[0]);
console.log(alunos[1]);

// enum
enum Cor {Verde, Amarelo, Azul, Branco}
let corFundo: Cor = Cor.Verde;

//any
let algumvalor: any = 4;
algumvalor = "é string";
algumvalor = true;

// void 
function alerta(): void{
    alert("teste");
} 
