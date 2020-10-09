//* Boolean
let on = true;
console.log(on);
//* YOU DO NOT PUT QUOTES AROUND ON BECAUSE THIS IS NOT A STRING.
let off = false;
console.log(off);

//* NULL
//* Essentially an empty value
let empty = null;
console.log(null);
//* when need something with no value use null. Undefined is for errors.

//* UNDEFINED
let undef = undefined;
console.log(undef);

let x;
console.log(x);


//* NUMBERS

let degrees = 90;
console.log(degrees);

let percise = 999999999999999;
console.log(percise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 *10) / 10;
console.log(numbersAreHard);

let a = Number('123');
console.log(a);


//* STRINGS
let stringOne = "double quotes";
let stringTwo = 'single quotes';
//* putting the backslash (\) after the I below lets you type I'm
let stringThree = 'I\'m home';
let stringFour = `I'm home`;
//* in four, using a "back tick" when placing a variable in a string
let stringFive = `${stringOne} or ${stringTwo}`
console.log()

let first = 1050 + 100;
let second= '1050' + '100';

console.log(first);
console.log(second);
//* first two different numbers, doing math. second two strings, concatanation, or smashing together. puts both together.

console.log(typeof first);
console.log(typeof second);
//* 'typeof' is an operator, tells javascript what to do here.

let animal = 'dog';
//* String interpolation second example below.
console.log('I have a ' + animal);
console.log(`I have a ${animal}`);


//* OBJECTS
//*Used to store many diff values, as opposed to single value

let frodo = {
//*  Key    Value
    race: 'hobbit',
    rings: 1,
    isShort: true,
}

console.log(frodo);
console.log(typeof frodo);

//* ARRAYS
//* Simmilar to objects, can hold mult data types. More of a list though.
//* Use numerical value. Below, 'large' = 0, 4 = 1, etc..
let tacos = ['large', 4, true];
console.log(tacos[2]);
console.log(typeof tacos);
//* NOTE JAVASCRIPT CLASSIFIES ARRAYS AS OBJECTS. OBJECTS W/O KEYS.

//* MINI CHALLENGE FROM TODAY CHECK CHALLENGE>JS
let firstName = 'Sam';
let lastName = 'Wolf';
let houseNumber = '12175';
let street = "Visionary Way";
let city = 'Indianapolis';
let state = 'IN';
let zipcode = 46260;

console.log(`${firstName} ${lastName} ${houseNumber} ${street} ${city} ${state} ${zipcode}`)
//* NOTE FOR FUTURE SAM. Notice the difference betwween this, and what you did for the challenge.
//* String interpolation is the reason for this. IT's easier. Remember it. 
let firstName = 'Sam';
let lastName = 'Wolf';
let address = `$(firstName) $(lastName)`;
console.log(address);

//* STRING PROPERTIES AND METHODS
let name = 'Sam';
// console.log(name.length)

//*methods are properties with code after them (?)
console.log(name.toUpperCase());

let home = 'My home is Indianapolis';
//*             METHOD VV  BOOLEAN VV
console.log(home.includes('Indianapolis'))
//*            CASE SENSITIVE ^^ ('indianapolis' will not work)

