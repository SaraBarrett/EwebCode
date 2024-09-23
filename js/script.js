// // alert("hello world");
// let myName = 'Sara';
// let mySurname = 'Monteiro';
// alert('Sara');
// alert(myName);
// let courseName = 'Front end Developer';

// alert("olá "+mySurname);

let courseName = 'Front-end Developer';

//indica o que está na 5 posição da variável courseName
// alert(courseName[5]);


//indica o tamanho da variável courseName
// alert('O tamanho de '+courseName+' são '+courseName.length+' caracteres.');

// alert(courseName.toUpperCase());

// //com concatenação
// alert('O nome deste curso é '+courseName+'!');

//nova sintaxe
// alert(`O nome deste curso é ${courseName}!`);

// alert(Math.PI);

// let userName = prompt('qual é o seu nome?');

// console.log(userName);

// let firstName = prompt('qual é o seu primeiro nome');
// let surname = prompt('qual é o seu apelido');


// alert(`Olá ${firstName} ${surname}!`);

// let userAge = parseInt(prompt('qual é a tua idade?'));

// if(userAge<18){
//     console.log('és menor')
// }else if(userAge == 18){
//     console.log('acabaste de entrar na maioridade, parabéns')
// }else{
//     console.log('és maior')
// }

//declaração de variáveis
let student1 = 'Duarte';
let student2 = 'Vânia';
let student3 = 'Bruno';

//declaração de um array com dados 
let students = ['Duarte', 'Vânia', 'Bruno', 'Carla'];

//declaração de um array vazio
let studentTests = [];

//imprimir na consola uma posição de variável
console.log(student3[2]);

//imprimir na consola uma posição de um array
console.log(students[1]);

//imprimir na consola uma posição de um array
console.log(students.length);

//assignar um novo dado numa posição específica do array
students[3] = 'Ivo';
students[students.length] = 'Patrícia';
//adiciona ao fim do array
students.push('Joana');

console.log(students);