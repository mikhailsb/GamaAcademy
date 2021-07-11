
const alunasGama = ["Paula","Maria","Estela","Clara"]

console.log(alunasGama[3])

// Operador spread (...)

const alunasXP = [...alunasGama, "Simara"]

console.log(alunasXP)

// Metodos de iteração

for(var i = 0; i < alunasXP.length; i++){
    console.log(alunasXP[i]);
}
console.log("------------------------")
alunasXP.map(aluna => console.log(aluna));

console.log("------------------------")

//filtro 

const numeros = [34, 45,67, 90, 55, 76];

const numerosImpares = numeros.filter(numero => numero%2 !=0)

console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 == 0)

console.log(numerosPares)

// filter filtra algumas informações criando um novvo array.

const numerosOrdenadosCrescente = numeros.sort();

console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a);
console.log(numerosOrdenadosDecrescente)

// Sort ordena uma array em ordem crescente e decrescentsort ((a,b) => b-a)

// reduce = reduz nosso array a um resultado de uma operação matemática
const numbers = [1, 24, 35]

const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
},5 )

console.log(soma)