//* PARAMETERS
function hi(name) {
//*           ^ Parameter
    console.log(`Hi ${name}`)
}

hi('Keagan');
//*  ^^ ARGUMENT
hi('Sam');
hi('Shit Head');


function addIt(x, y) {
    console.log(x+y);
};

addIt(2, 9);
addIt(8, 6);
addIt(7, 4);

//* CHALLENGE
//* WRITE FUNCTION THAT TAKES IN TWO PARAMETERS
//* COME TOGETHER IN VARIABLE INSIDE FUNCTION
//* FINAL RESULT CONSOLE LOG "HELLO MY NAME IS 'NAME'"



function whaddap(x, y) {
    console.log(`Hello, my name is ${x + y}`)
}

whaddap('Sam', ' Wolf')

//* FROM INSTRUCTOR
function myName(fName, lName) {
    let fullName = fName + ' ' + lName;
    console.log(`Hello, my name is ${fullName}.`);
}

myName('Sam', 'Wolf');