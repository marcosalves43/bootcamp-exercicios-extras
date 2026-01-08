
//Exercício 1 - Par ou ímpar?

var numeros = [0,1,2,3,4,5];

numeros.forEach(function(numero)   {
  if(numero % 2 === 0){
    console.log( numero + 'é par')
  }else{
    console.log(numero + ' é ímpar');
  }
})


//Exercício 2 - Quero o dobro

const numeros = [1,2,3,4,5,6]

const dobro = numeros.map(numero => {
  return numero * 2;
})

console.log(dobro);







