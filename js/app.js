console.log("js-fizzbuzz")
// Per iniziare scrivi un programma che stampi in console i numeri da 1 a 100,
//     Successivamente aggiungi un controllo sul numero in modo tale che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// in tutti gli altri casi venga stampato il numero stesso

for (let i = 0; i < 100; i++) {
    let num = i + 1;
    const resto3 = num % 3
    const resto5 = num % 5
    if (resto3 === 0 && resto5 === 0) {
        console.log("FizzBuzz")
    } else if (resto5 === 0) {
        console.log("Buzz")
    } else if (resto3 === 0){
        console.log("Fizz")
    } else {
        console.log(num)
    }
}