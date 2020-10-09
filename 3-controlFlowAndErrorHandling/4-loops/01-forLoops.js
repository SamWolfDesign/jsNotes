let i = 7;

// same as i = i + 1
for (i = 0; i < 10; i++){
    console.log(i);
}

for (i = 2; i < 20; i +=2){
    console.log(i);
}

console.log('global variable:', i);
//Challenge: using a for loop, count from 10 to 0 going down by 1
let i = 0;
for (i = 0; i > 11; i-= 1){
    console.log(i);
}

//ACTUAL SOLUTION FOR ABOVE CHALLENGE
for (i = 10; i > 0; i--){
    console.log(i);
}

//* USING A FOR LOOP, COUNT FROM 0, GOING DOWN BY 2's to -24
for (i = 0; i > -24; i --){
    console.log(i);
}

//* ACTUAL FROM INSTRUCTOR
for (i = 0; i >= -25; i-= 2) {
    console.log(i);
}
// CHALLENGE; USING A FOR LOOP GO THROUGH YOUR NAME AND DISPLKAY INDIVIDUALLY
let name = "Sam Wolf";
for (let i = 0; i < name.length; i++){
    if (name[i] != " "){
    console.log(name[i]);
}
}

/*(1)                   (2)
for (<your_name_Choice> of <some collection>) {
    <do something> 
}
1. for loop declaration.
2. of - is a built in word saying for all things in a collection
common name is "for of" loop
*/

// BELOW IS A 'FOR OF' LOOP
for (l of name) {
    console.log(l)
}

let fruits = ["apple", "bananas", "kiwi"]
for (fruit of fruits){
    console.log(fruit)
}

// CHALLENGE MAKE A FOR LOOP WWHERE YOU ADD UP ALL NUMBERS FROM 1-50 (should equal 1275)

let i = 1
{for (let i = 1; i < 51; ++i){
    i += [i];
}
}

function totalVotes()
{
    var total = 0;

    for (i=0; i < votes.length; ++i)
         {
             total += votes[i];
         }
        return total;
    }


// INST EX

let sum = 0;

for (let i = 1; i <= 50; i++){
    sum += i;
}
console.log(sum);