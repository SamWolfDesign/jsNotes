// PLEASE NOTE THIS SHOULD READ FOR IN LOOPS

let student = {
    name: "sam",
    awesome: false,
    degree: "JavaScript",
    week: 1
}
for (item in student) {
    console.log(item);
    console.log(student[item]);
}


let cats = ['tabby', 'british shorthair', 'burmese']
for (cat in cats) {
    console.log(cat);
    console.log(cats[cat]);
}

//CHALLENGE:
//write a for in loop that capitalizes the first letter in name and lowercases the rest of the name

let name = 'sAm WoLf' 

for (first in name) {
    console.log([0].toUppercase)
}

// INSTR EX

let name = 'jUstiN AhmAnN'
let capName;

for (let i in name){
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}
console.log(capName);


/*
- write a for loop running between the numbers 0 - 100
    - for multiples of 3, instead of the number, console.log "Fizz"
    - for multiples of 5 console.log "Buzz";
    - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
    - for any other number, console.log the value
*/

/

//* INST EXAMPLE

for (i = 0; i <=100; i++){
    if (i % 15 === 0) {
        console.log("Fizz Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
    }    else {
            console.log(i)
        }
    }

//* FOR LOOP SWITCH

for (let FB = 0; FB <= 100; FB++) {
    switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log('Fizz Buzz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
    case (FB % 3 === 0):
        console.log('Fizz');
        break;
    default:
        console.log(FB);
    }
}