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