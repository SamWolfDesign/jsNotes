// let name = false;

// if (name) {
//     console.log('Sam Wolf');
// } else {
//     console.log('Hello, what is your name?');
// }

// if (name) {
//     console.log('Hello, my name is Sam Wolf');
// } else {
//     console.log('Hello, is your name Sam Wolf?');
// }

// //* EXAMPLE

// let name = "Justin";

// if (name == "Sam"){
//     console.log("Hello, my name is", name + "!");
// } else {
//     console.log(`Hello, is your name ${name}?`);
// }

// //* DOT NOTATION
// let student = {
// //* KEY VALUE PAIRS
// //* KEY v   Value V    
//     name : "Justin",
//     grade : 12

//*When to use. When have javascript and you know the key
//* let names= [
//*    "justin",
//*    "Adam",
//*    "Amy"
//* ]
//* ABOVE IS AN OBJECT WRITTEN AS AN ARRAY. BUT USE DOT NOTATION INSTEAD.
// console.log(student.name);   DOT NOTATION
// console.log(student[index]); BRACKET (SQUARE) NOTATION
//* ABOVE ARE WWAYS TO ACCESS AN OBJECT

// //*WAYS OF ACCESSING AN ARRAY
// console.log(names[2]);

// let fruit = ['apple', 'orange',]
// let apple = fruit[0]
// console.log(apple);
// console.log(names.slice(1,3))


//* FROM TODAY'S CHALLENGE

// //* BRONZE

// let name = 'zAchARy';
// console.log(name.charAt(0)) //* BOTH WILL GET YOU A Z
// console.log(name[0])
// if (name[0] == name[0].toUpperCase()){
//     console.log(name);
// } else {
//     console.log("hey, this isn't written correctly");
// }

// //*SILVER
// let name = 'zAchARy';

// if (name [0] == name [0].toUpperCase()) {
//     console.log(name[0]);
// } else {
//     console.log(name.slice(1).toLowerCase();)
// }
//* ABOVE, THE BLANK PAREN () ARE A METHOD.


//* GOLD
let name = 'zAchARy';

if(name[0] == name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log('console log #1', isUpperCase);
} else {
    let notUpperCase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console log #2', notUpperCase);
}
