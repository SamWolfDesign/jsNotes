let isOn = false;
// //* if (<some expression>) {<do something>}
// if (isOn == true) {
//     console.log('The light is on!');
// };
// //* BASICALLY IF TRUE= RUN IT

if (isOn) {
    console.log("The light is on!");
}
//* CODE CAN BE RUN CONDITIONALLY. I.E., IF CONDITIONS ARE MET, CODE CAN RUN.
//* ^^^^^ IF FALSE = NO RUN IT

if (isOn == false){
    console.log("The light is off");
}

let weather = 75;

// if (weather < 70){
//     console.log('Wear a jacket');
// } 


if (weather < 70) {
    console.log("Wear a jacket");
} else { //* ELSE CAN FOLLOW AN IF STATEMENT AND WILL FIRE
         //* IF THE ABOVE STATEMENT DIDN'T
    console.log("No jacket necessary!");
};
//* NOTE THAT ELSE STATEMENTS HAVE TO COME AFTER IF STATEMENTS

// Switch
let officeCharacter = "Pam";
// SWITCH TAKES IN WHAT EXAMING
switch (officeCharacter) {
    //kind of like if officeCharacter == "Michael"
    case "Michael":
        console.log("My mind is going a mile an hour");
        break; // break will leave the switch after the block runs
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar");
    default:
        console.log(`I'm sorry ${officeCharacter}, but do I know you?`);
}

let dessert = 'carrots';

switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!')
        break;
    case 'cake':
        console.log('cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
    default: 
        console.log('Not on the menu.');

}

// ELSE IF TANGENT
if (dessert == "cake") {
    console.log('Cake is great!');
} else if (dessert == "ice cream"){
    console.log('I scream for ice cream!');
} else {
    console.log('Not on the menu.');
}

//Ternary
// does one thing or the other
let num = 6;

// (something) ? true : false
//  VV           vv              false vv
(num > 0) ? console.log('yes') : console.log('no');
// imagine you're making a path that hits a fork
// you really don't want more than three parts to a Ternary
// HOWEVER, these really work best if you're wanting to do two things