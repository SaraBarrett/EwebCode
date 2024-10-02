

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

let media = calc(18, 18, '+')/2;

function calc(num1, num2, op){
    switch(op){
        case '+':
        alert('o resultado é ' + (num1+num2));
        break;

        case '*':
        alert('o resultado é ' + (num1*num2));
        break;

        case '-':
            alert('o resultado é ' + (num1-num2));
            break;

        case '/':
            alert('o resultado é ' + (num1/num2));
            break;

    }


   

}
