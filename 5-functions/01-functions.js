//* DECLARATION
function hi() {
    console.log('HI')
}

//* WHEN WANT TO RUN FUNCTION YOU HAVE TO CALL IT
hi();
//* USe so that don't have code just laying around waiting to run
//* Often, code needs to be run at a specific moment, function perf for that


//* EXPRESSION
let hello = function() {
    console.log('Hey!')
}

hello();


//* FUNCTION EXAMPLES
function addIt() {
    console.log(5+10)
};
//* INVOKING THE FUNCTION VV
addIt()

function counting() {
    for (i = 1; i <= 10; i++){
        console.log(i)
    }
}

counting()

//* CHALLENGE 
/*  - Given the array, create a function that lists out the values individually.
let arr = ['This', 'is', 'really', 'cool'];
*/

let fruit = ['apple', 'orange',]
// let apple = fruit[0]
// console.log(apple);
// console.log(names.slice(1,3))

function list() {
let arr = ['This', 'is', 'really', 'cool'] 
let list = arr[0, 1, 2, 3] 
    console.log(slice)

// console.log(arr)

}

// function list (){
//     let arr = ['This', 'is', 'really', 'cool']{
//         console.log(.split)
//     }
// }


let arr = ['This', 'is', 'really', 'cool'];

function individually() {
    for (i =0; i < arr.length; i++){
        console.log
    }
}


//* FROM INST
let arr = ['This', 'is', 'really', 'cool'];

function arrlist() {
    for (item of arr) {
    console.log(item)
    }
}
//* NOTE, ABOVE 'ITEM" CAN BE ANYTHING.
//* THE IMPORTANT PART IS BELOW, THAT CALLS THE FUNCTION
arrlist();
