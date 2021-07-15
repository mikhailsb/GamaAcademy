// boolean

const contaPaga: boolean = false;

// number

const idade: number = 33;
const avaliacao: number = 4.5;

// string
const nome: string = 'Mikhail Bispo';

// array
const idades: number[] = [23, 33, 43,];
const idades2: Array<number> = [44,33,22,11,66,77,]

// Tuple
let jogadores: [string, string, string];
jogadores = ["Paulo", "Fernando", "Leticia"];


// Enum
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any

const retornoDaAPI: any[] = [123, 'Mika', false];

// Void
function printarNaTela(msg: string): void{
    console.log(msg)
}

// Null e Undefined

const u: undefined = undefined;

const n: null = null;

// Object

function criar(objecto: object){
    // ...
}

criar({
    propriedade: 1,
})
// Criar('victor') // Dá erro

//  Para mais tipos:
// https://www.typescriptlang.org/docs/handbook/basic-types.html

// Never

 function loopInfinito(): never{
     while(true){}
 }

 function erro(mensagem: string): never{
     throw new Error(mensagem);
 }

 function falha(){
     return erro('Algo falhou');
 }

 // Union Types

 const nota: string | number = 5;
 function exibirNota(nota: number | string){
     console.log(`A nota é ${nota}`);
 }

 exibirNota('10');

 // Alias

 type Funcionario = {
     nome: string;
     sobrenome: string;
     dataNascimento: Date;
 }

// type Funcionarios = Array<Funcionario>;
 const funcionarios: Funcionario[] = [{
     nome: 'Mikhail',
     sobrenome:'Bispo',
     dataNascimento: new Date()}];

function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionarios ', funcionario.nome);
    }
}

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1:string;
    telefone2?: string;
}

const contato: Contato ={
    nome: "Mikhail",
    telefone1: '24234234',
}