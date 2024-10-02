
let myVar = 'hello';
let total = 0;
// function alertHello(){
//     alert('hello world!');
// }

// function printHeart(){
//     alert('<3');
// }

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

function isSnakeEyes(num1, num2){
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

alert(myVar)


