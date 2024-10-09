// alert("hello world");
let myName = 'Sara';
let mySurname = 'Monteiro';
alert('Sara');
alert(myName);
let courseName = 'Front end Developer';

alert("olá "+mySurname);

// let courseName = 'Front-end Developer';

// indica o que está na 5 posição da variável courseName
alert(courseName[5]);


//indica o tamanho da variável courseName
alert('O tamanho de '+courseName+' são '+courseName.length+' caracteres.');

alert(courseName.toUpperCase());

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
// let student1 = 'Duarte';
// let student2 = 'Vânia';
// let student3 = 'Bruno';

// //declaração de um array com dados 


// //declaração de um array vazio
// let studentTests = [];

// //imprimir na consola uma posição de variável
// console.log(student3[2]);

// //imprimir na consola uma posição de um array
// console.log(students[1]);

// //imprimir na consola uma posição de um array
// console.log(students.length);

// //assignar um novo dado numa posição específica do array
// students[3] = 'Ivo';
// students[students.length] = 'Patrícia';
// //adiciona ao fim do array
// students.push('Joana');

// console.log(students);


//nested arrays
// const weekDays = [
//     [[10, 11,12], 'Segunda Tarde'],
//     'Terça', 
//     'Quarta', 
//     'Quinta', 
//     'Sexta',
//     ['Sábado Tarde', 'Sábado Noite']
// ];

// console.log(weekDays[0]);


//objectos
// let courseDetails = {
//     name : 'Front End Developer',
//     hours: 950,
//     type: 'Reskilling',
//     place: 'São João da Madeira',
//     modules: ['JS', 'TAP', 'SQl', 'Algoritmia']
// }

// //console.log('o curso é do tipo '+courseDetails.type);
// console.log(courseDetails.modules[2]);
// courseDetails.modules.push('Wordpress');
// courseDetails.place = 'Online';
// console.log(courseDetails);

// alert('olá turma!');
// alert('olá turma!');
// alert('olá turma!');
// alert('olá turma!');
// alert('olá turma!');
// alert('olá turma!');


// for(let i=1; i<=6; i++){
//     console.log(i,'olá turma');
// }

// console.log('saiu fora do ciclo')

//uso de for para iterar um array

// let students = ['Vânia', 'Ivo', 'André', 'Duarte', 'João', 'Ruben', 'Hélder', 'Ricardo', 'Joana','Patrícia', 'Francisco', 'Fábio', 'Lara', 'Mara'];

// let students = ['Vânia', 'Ivo', 'André', 'Duarte', 'João', 'Ruben', 'Hélder', 'Ricardo', 'Joana','Patrícia', 'Francisco', 'Fábio', 'Lara', 'Mara'];

// console.log('melhor aluno: '+students[0]);
// console.log('melhor aluno: '+students[1]);
// console.log('melhor aluno: '+students[2]);
// console.log('melhor aluno: '+students[3]);
// console.log('melhor aluno: '+students[4]);
// console.log('melhor aluno: '+students[5]);
// console.log('melhor aluno: '+students[6]);
// console.log('melhor aluno: '+students[7]);
// console.log('melhor aluno: '+students[8]);

// for(let i = 0; i<students.length; i++){
//     console.log('melhor aluno: '+students[i]);
// }
let students = ['Vânia', 'Ivo', 'André', 'Duarte', 'João', 'Ruben', 'Hélder', 'Ricardo', 'Joana','Patrícia', 'Francisco', 'Fábio', 'Lara', 'Mara'];
//este ciclo percorre um array sem termos a necessidade de incrementar os indexs
console.log(students);
for(element of students){
    console.log(element);
}



