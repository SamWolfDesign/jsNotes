//Ternary
// does one thing or the other
let num = 6;

// (something) ? true : false
//  VV           vv              false vv
(num > 0) ? console.log('yes') : console.log('no');
// imagine you're making a path that hits a fork
// you really don't want more than three parts to a Ternary
// HOWEVER, these really work best if you're wanting to do two things

let age = 30;

(age > 25) ? console.log("Yay! You can rent a car!") : console.log("Sorry, you're too young to do anything fun.");
(age > 21) ? console.log("Yay! You can drink!") : console.log("Sorry, you're too young to do anything fun.");
(age > 18) ? console.log("Yay! You can vote!") : console.log("Sorry, you're too young to do anything fun."); 

(age >= 25) ? console.log("Yay! You can rent a car!") : 
(age >= 21) ? console.log("Yay! You can drink!") : 
(age >= 18) ? console.log("yay! you can vote!") : (age <= 18) ? console.log("lol grow up");

//* BEST PRACTICE WAY TO DO TERNARY CHALLENGE BELOW
let age = 18;
(age >= 25) ? console.log("Yay! You can rent a car!")
    : (age >= 21) ? console.log("Yay! You can drink!")
        : (age >= 18) ? console.log("yay! You can vote!")
            : console.log("Sorry, you're too young to do anything fun")

// EXAMPLE OF CASE BELOW

let age = 22;
switch (true) {
    case (age > 24):
        console.log("Yay! You can rent a car!")
    case (age > 20):
        console.log("yay! You can drink!")
    case (age > 17):
        console.log("Yay! You can drive a car!");
        break;
    default: 
        console.log("Sorry, you're too young to do anything fun."); 
}