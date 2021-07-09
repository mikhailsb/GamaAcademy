
// Lista de Tarefas.
console.log("\n--------------------------------------\n");
console.log("\n--- Lista de tarefas ---\n");

const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]') ;

let lists = [];

newListForm.addEventListener('submit',function(e){
    e.preventDefault()
    const listName = newListInput.value
    if(listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null;
    lists.push(list)
    render()
})

function createList(name){
    return {id: Date.now().toString(), name: name}
}

function render(){
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}
// Todo evento de Submit, o navegador é atualizado.
console.log(listContainer);


console.log("\n--------------------------------------\n");
console.log("\n--------------------------------------\n");
console.log("\n--------------------------------------\n");
console.log("\n--------------------------------------\n");


var myName = "Mikhail";

var myLastName = "Bispo";

let language = "Javascript";

const pattern = "ECMASript";

var myCat = "Aquiles"; // string
var age = 33; //number 

//null // Objeto vasio 
//undefined // valor que não foi definido 

//boolean // tipo lógico.


console.log(myName + " " + myLastName)

// Objeto, array e function

// Objeto
var perso = {
    "name": "Mikhail",
    "age": 33
}

// array
var students = ["Mikhail", "Silmara", "João"];

// function
function sum(a, b) {
    return a + b
}

// Operador TypeOf

var age = 33;
console.log (typeof age)

var isStudent = true;
console.log(typeof isStudent);

// ---------------------------------

// Operadores aritméticos
// adição + 
var sumTwoNumbers = 6 + 9;
console.log(sumTwoNumbers)
// subtração -
var subTwoNumbers = 6 - 9;
console.log(subTwoNumbers)
// multiplicação *
var multTwoNumbers = 6 * 9;
console.log(multTwoNumbers)
// divisão /
var divtTwoNumbers = 6 / 9;
console.log(divtTwoNumbers)
// módulo ou resto de uma divição %
console.log(6 % 9)
// incrimento ++
var _sum = 6;
console.log(++_sum);
// decremento --
var _sub = 6;
console.log(--_sub);

console.log("----------------\n");
var oct1 = 255;
var bin = "";

if(oct1%2!=0){
    bin = "" + oct1%2;
    oct1 = oct1/2;
}

console.log("bin= "+bin);
console.log("OCT1= "+ Math.trunc(oct1));

console.log("----------------\n");

console.log("--- Condicionais ---\n");

var num = 1;
num = 5;
if(num === 1)
{
    console.log("num é igual a 1");
}else if(num ===2){
    console.log("num é igual a 2");
} else{
    console.log("num é igual a 5");
}

console.log("--- Switch Case ---\n");

var mes = "Março";

switch(mes){
    case"Janeiro":
        console.log("mes 1");
        break;
    
    case"Fevereiro":
        console.log("mes 2");
        break;
    
    case"Março":
        console.log("mes 3");
        break;

    case"Abril":
        console.log("mes 4");
        break;
    
    default:
        console.log("Nenhum dos casos acima atendidos");
}

console.log("-----------------------------------\n");
console.log("--- Estrutura de Repetição ---\n");

console.log("--- Estrutura FOR ---\n");

var color = ["black", "white", "yellow", "green", "blue"];

for(var i = 0; i < color.length; i++ ){
    console.log(color[i]);
}
console.log("--- ---------- ---\n");
for(var i = 0; i <= 10; i++){
    console.log(i);
}

console.log("--- Estrutura WHiLE ---\n");

var i = 10;

while(i < 10){
    console.log(i);

    i++;
}
sayHello();
console.log("--- Estrutura DO WHiLE ---\n");

i = 10;

do{
    console.log(i);

    i++;
}while(i < 10);

console.log("------------------------\n");

console.log("--- Funções ---\n");

function sayHello(name, lastName) {
    console.log("Hello " + name+ " " + lastName + "!");
}

sayHello("Mikhail", "Bispo");

function sum(a,b){
    return a + b;
}

console.log(sum(45,66));

console.log("------------------------\n");

console.log("--- Orientação a Objeto ---\n");

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos para viver','Vrien', 500);

console.log(book.read());

let otherBook = new Book('Um Exu em Nova York', 'Cidinha da Silva', 150);

console.log(book, otherBook);

console.log("\n--- Herança em Objetos ---\n");

class ITBook extends Book{
    constructor(title, author, pages, technology){
        super(title, author, pages);

        this.technology = technology;
    }
}

let itBook = new ITBook('Algoritmos para viver','Vrien', 500, "Algoritmos");

console.log(itBook);
console.log(itBook.read());

console.log("\n--- Encapsulamento em Objetos ---\n");

class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let person = new Person("Mikhail");

person.name = "Suit";
console.log(person.name)

console.log("\n--------------------------------------\n");
console.log("\n--- Exercício ---\n");


console.log("\nteste\n");
var entrada = 24;
var div3 = entrada%3;
console.log(div3);
console.log(typeof div3);
console.log("\n--------------------------------------\n");


// FizzBuzz
// Divisivel por 3 => 'Fizz',
// Divisível por 5 => 'Buzz',
// Divisivel por 3 e 5 => 'FizzBuzz",
// Se não for um número => "Não é um número"
// Se não for divisivel nem por 3 e nem por 5 => entrada
let resultado = fizzBuzz(12);
console.log(resultado);

function fizzBuzz(entrada){

    if(typeof entrada == "number")
    {
        var div3 = entrada%3;
        var div5 = entrada%5;
        
        if(div3 == 0 && div5 == 0){
            return "FizzBuzz"
        }else if(div3 == 0){
            return "Fizz"
        }else if(div5 == 0){
            return "Buzz"
        }else{
            return entrada;
        }

    }else{
        return "Não é um número"
    }
}
/*
Resultado da Aula:
function fizzBuzz(entrada){

    if(typeof entrada !== "number")
        return "Não é um número";
    if(entrada % 3 === 0 && entrada % 5 === 0)
        return "FizzBuzz";
    if(div3 == 0)
        return "Fizz";
    if(div5 == 0)
        return "Buzz";
    
        
    return entrada;
    
}
*/
console.log("\n--------------------------------------\n");
console.log("\n--- Reverse a string ---\n");
// Reverse a string

let newStr = '';

function reverseAString(str){
    for(let i = str.length -1; i >= 0; i--){
        newStr += str[i];
        console.log(newStr);
    }
}

reverseAString('Hello');

// Convert Celsius to Fahrenheit
console.log("\n--------------------------------------\n");
console.log("\n--- Convert Celsius to Fahrenheit ---\n");


function convertToFahrenheit(value){
    return value * 1.8 + 32;
}

let result = convertToFahrenheit(1);
console.log(`O valor em Fahrenheit é ${result}`);

