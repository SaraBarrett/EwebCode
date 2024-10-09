// //definir uma variável
// let myLuckyNumber = 16;
// let myName = 'Sara';

// alert('o meu nome é '+myName+' e o meu número preferido é o '+myLuckyNumber);

// myLuckyNumber = 36;

// //++ é o mesmo que colocar o número e somar 1
// myLuckyNumber = 36+1;
// myLuckyNumber++;

// alert('o meu nome é '+myName+' e o meu número preferido é o '+myLuckyNumber);

// const word = 'skateboard';
// let facialHair = word.slice(5,10).replace('o', 'e');

// alert(facialHair);

//ex slide 36 -1
// let weekDay = prompt('que dia é hoje?').toLowerCase();

// if(weekDay == 'sexta' || weekDay == 'sexta-feira' || weekDay == 'sexta feira'){
//     alert('yyay, sobrevivemos a mais uma semana');
// }else{
//     alert('força nisso');
// }

//ex slide 36 -2
// let password = prompt('Introduza uma pass com pelo menos 6 caracteres');

// if(password.length <6){
//     alert('a pass é inválida!');
// }else{
//     alert('a pass é válida, podes seguir!');
// }

//pp 40
// let planets = ['Mercurio', 'Venus', 'Terra','Mart', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];

// planets[3]='Marte';
// planets.pop();
// planets.unshift('Novo Planeta');

// console.log(planets)

//pp44
// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
//     ];

// airplaneSeats[3][1] = 'Sara';

//pp 47

// let product = {
//     name : 'caneta',
//     inStock: true,
//     price: 1.99+'€',
//     colors: ['verde', 'vermelho', 'azul']
// };

// console.log('o preço é  '+product.price+' e a cor escolhida é '+product.colors[0]);
// product.price = 2.55+'€';

// product.inStock = false;
// console.log(product)

//p52

// for(let i=1; i<7; i++){
//     console.log(i,'Da ba dee da ba daa');
// }

// for(let i= 25; i>4; i-=5){
//     console.log(i);
// }

//pp55
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for(let i = 0; i<people.length; i++){
//     console.log(people[i].toUpperCase());
// }

//pp59
// let shoppingList = [];

// let item = false;

// while(item != 'fim'){
//     shoppingList.push(item);
//     item = prompt('que item pretende comprar? Digite fim quando acabar!').toLowerCase().trim();
// }

// shoppingList.shift()
// console.log(shoppingList)

//ex91

// const validUserNames = (usernames) => {
//   console.log("os nomes foram: ");

//   for (myname of usernames) {
//     console.log(myname);
//   }

//   const validNames = usernames.filter((element) => element.length < 10);
//   return validNames;
// };

//ex 94
//maneira super tradicional, sem funções js
function allEvensT(numbers) {
  let isEven = true;

  for (element of numbers) {
    if (element % 2 != 0) {
      isEven = false;
      return isEven;
    }
  }

  return isEven;
}

//sintaxe tradicional, compatibilidade total
function allEvens(numbers) {
  let evens = numbers.every((elem) => elem % 2 == 0);

  return evens;
}

//nova sintaxe, atenção a compatibilidade de browsers e de funções da pp linguagem
const allEvensNew = (numbers) => numbers.every((elem) => elem % 2 == 0);
