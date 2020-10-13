// let number= '3';

// if (number /= '3') {
//     console.log('fizz');
// } else {
//     console.log('lol nah');
// }

// //* SWITCH 
// // let div3= '3'
// let threeFive = ( fb /=3 && 5);
// let divThree = ( fb /= 3);
// let divFive = ( fb /= 5);


// switch (fb) {
//     case divThree :
//         console.log("Fizz");
//     break;
//     case divFive:
//         console.log("buzz")
//     break;
//     case threeFive:
//     console.log ("fizzBuzz");
// }


/*
Fizz Buzz Conditionals Challenge
- create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/        

let fb = 15;
(fb % 3 && 5 === 0) ? console.log("FizzBuzz") : console.log();
//* okay so FB is 30. FB modulus 3 (which gives your the ramainder of 30 / 3) strictly 
(fb % 3 === 0) ? console.log("Fizz") : console.log() ;
(fb % 5 === 0) ? console.log("Buzz") : console.log() ;

//* BELOW FROM INSTRUCTORS 
//* IF ELSE

let FB = 3;
//* ALWAYS WWANT THE STRICTEST CONDITIONAL FIRST
//* AS SOON AS CONDITION MET, WILL BREAK OUT OF CURLY BRACKETS AND RUN IT
//* REMEMBER MODULUS IS DIVIDE WITH NO REMAINDER
//* NOT DIV BY 3 AND 5
if (FB % 3 == 0 && FB % 5 ==0) {
    console.log('Fizz Buzz');
    //* NOT DIV BY 5
} else if (FB % 5 == 0) {
    console.log('Buzz');
    //* IS DIV BY 3, ERGO RUN FIZZ
} else if (FB % 3 == 0) {
    console.log('Fizz');
} else {
    console.log(FB);
}
//* ABOVE IS THE "BEST" SOLUTION TO THE CHALLENGE

//* SWITCH

let FB = 30;

switch (true) {
    case (FB % 15 == 0):
        console.log('Fizz Buzz');
        break;
    case (FB % 5 == 0):
        console.log('Buzz');
        break;
    case( FB % 3 == 0):
        console.log('Fizz');
        break;
}


//* TERNARY
let FB = 30;
//* BASIUCALLY SAME AS ELSE IF, JUST DIFF SYNTAX
(FB % 15 ==0) ? console.log('Fizz Buzz') :
(FB % 5 == 0) ? console.log('Buzz') :
(FB % 3 == 0) ? console.log('Fizz'):
console.log(FB);

