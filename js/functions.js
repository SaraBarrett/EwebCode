
let myVar = 'hello';
let total = 0;
let airplanes= ['boeing', 'airbus344', 'cessna', 'embraer'];

const fullNames = [
    {first: 'Albus', last: 'Dumbledore'}, 
    {first: 'Harry', last: 'Potter'}, 
    {first: 'Hermione', last: 'Granger'}, 
    {first: 'Ron', last: 'Weasley'}, 
    {first: 'Rubeus', last: 'Hagrid'}, 
    {first: 'Minerva', last: 'McGonagall'}, 
    {first: 'Severus', last: 'Snape'}
];

const firsts = fullNames.map(function(element){
    return element.first;
})

for(let item of airplanes){
    console.log(item);
}

let nums = [1,4,5];

nums.forEach(function(item){
    console.log(item+item);
}
)


let myStudents = ['Patrícia', 'Hélder', 'Joana'];
let newStudents = [];

for(let item of myStudents){
    newStudents.push(item.toUpperCase());
}

let newStudents2 = myStudents.map(function(n){
    return n.toUpperCase();
})

airplanes.forEach( function(n){
    console.log(n)
    }
)

console.log(newStudents)
console.log(newStudents2)

// function alertHello(){
//     alert('hello world!');
// }

// function printHeart(){
//     alert('<3');
// }

let product = {
    pname: 'avião',
    price: 1000000,
    fullPhrase(){
        return 'O nome do produto é '+this.pname+' e o valor é '+this.price+'€!'
    },
    fullRePhrase(){
        return `O valor é ${this.price}€ e o produto de que estou a falar é ${this.pname}!`
    }

    
}


function printAlert(string){

    alert('olá a mensagem que tenho para ti é '+string);
}

function tellMeWhatYHate(){

    let hate = prompt('diz-me o que odeias!');
    rant(hate);
}

function rant(message){
    for(let rant=1; rant<4; rant++){
        alert(rant+': '+message.toUpperCase());
    }
}

function calc(num1, num2, op){
    let total = 0;
    switch(op){
        case '+':
            total = num1+num2;
        break;

        case '*':
            total = num1*num2;
        break;

        case '-':
            return num1-num2;
            break;

        case '/':
            alert('o resultado é ' + (num1/num2));
            break;

    }

    return total;
}

// let media = calc(15, 19, '+')/2;
// alert(media);







function tellMeYourNumbers(){

    let umatentativa = prompt('num1!');
    let duastentativa = prompt('num2!');

    isSnakeEyes(umatentativa, duastentativa);

}

// function isSnakeEyes(num1, num2){
//     if(num1 == 1 && num2==1){
//         alert('Yay, snake eyes');
//     }else{
//         alert('não são snake eyes');
//     }
// }

const isSnakeEyes = function(num1, num2){
    if(num1 == 1 && num2==1){
        alert('Yay, snake eyes');
    }else{
        alert('não são snake eyes');
    }
}


function hellWorld(){
    myVar = 'Hell world';
   
    
    alert(myVar);
    return myVar;
}






