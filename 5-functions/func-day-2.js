//* MAKE A FUNCTION CALLED "GREET"

function greet () {
    console.log("Hello");
}

//* SAY "HI"

let say_hi = () => console.log("Hi")

//* "HELLO"

let hello = () => {
    console.log("Hello!");
}

//*  greet_two
let greet_two = function() {
    console.log("greet again");
}

a_list =  ['Sam', 'Wolf']

function print_list(){
    console.log(a_list)
}

print_list()  //* REMEMBER THIS IS HOW YOU CALL YOUR FUNCTION w/o WILL NOT RUN

function better_print(list_param){
    console.log(list_param)
}
better_print(a_list)



//* DIFFERENCES BETWEEN TWO ABOVE
/*
Better print is more dynamic, needs to pass parameter
print list is aware of the func-day-2 file
Better Print will work wherever you take it,
Print list needs to be in Func-day-2

Imagine funct as a black box, once you create it you know what you'll get back
if you cant tell purpose from variable name, function probably not very strong

REMEMBER THE ARGUMENT IS WHAT IS NEEDED FOR FUNCTION TO WORK
*/


//* ANOTHER EXAMPLE
function var_loop(n){
    for(let i = 0; i <= n; i++){
        console.log(i);
    }
}
var_loop(20)   //* THIS IS WHAT MAKES IT DYNAMIC
                //*  VV   THIS TELLS LINE 63, 64 WHAT TO DO
function print_name(name){
    console.log(name);
}
        //* VV     THIS TELLS THE FUNCTION WHAT TO PRINT
print_name("Sam")
print_name("Adam") //* AGAIN, THE ONLY WWAY TO GET DYNAMIC DATA IS THROUGH THE ARGUMENT ("SAM")

//* CHALLENGE 
//* WRITE OUT HOW THIS WORKS WITH 20
//* DO THIS USING COMMENTS

//*               v REMEMBER THIS IS THE PARAMETER
function var_loop(n){       //* Function tells us what we're making (duh)
    for(let i = 0; i <= n; i++){  //* HERE WE'VE DEFINED THAT I = 0
        console.log(i);
    }
}
var_loop(20)
//*       ^ up in var_loop this is (n)
//*       ^ if you change this '20' to a '40' this will make it print 40 times
//*       ^ REMEMBER THAT n HERE IS IN THE FOR UP ABOVE



//* MULTIPLE ARGUMENTS
//* MAKE A FUNCTION THAT TAKES IN 3 THINGS AND PRINTS THEM ON SEPERATE LINES
function multi_print(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
} //* THIS IS AN OPTION BUT ITS BAD

//* TRY LIKE THIS 
function list_print(word_list){
    for (word in word_list){
        console.log(word_list[word]);
    }
}
list_print(["Sam","Adam","amy","Joe"])

//* REMEMBER THAT FOR IN LOOP RETURNS THE INDEX
//* FOR OF LOOP BELOW
function list_print(word_list){
    for (word of word_list){
        console.log(word)       //* NOTE THAT YOU JUST CONSOLE.LOG(WORD)
    }                           //* NOTE HOWW THIS DIFFERS FROM THE FOR IN LOOP ABOVE
}
list_print(["Sam","Adam","amy","Joe"])