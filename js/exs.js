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
let shoppingList = [];

let item = false;

while(item != 'fim'){
    shoppingList.push(item);
    item = prompt('que item pretende comprar? Digite fim quando acabar!').toLowerCase().trim();
}

shoppingList.shift()
console.log(shoppingList)