//* SCOPE
/* SCOPE IS HOW COMPUTER KEEPS TRACK OF VARIABLES, WHERE LOCATED
OUTSIDE OF CODING:
Think of global scope as planet earth, we live on earth.
But our local scope is Indianapolis.
Basically, all people live on earth, but not all people live in Indianapolis.

Same true for java. There is global and local scope.
*/

let x = 12; //* WITHIN GLOBAL SCOPE, x=12

function scope(){
    let x = 33;
    console.log(x);  //* WITHIN LOCAL SCOPE, x=33.
}                    //* LOCAL BECAUSE IT'S WITHIN THE FUNCTION

scope();
console.log(x);

//* ANOTHER EXAMPLE

let y = 12;
function scope() {
    y = 33;
    console.log(y);
}

scope();
console.log(y);

//* SO WHY DOES ABOVE GIVE US two 33's???
//* IN FIRST EXAMPLE WE MADE VARIABLE X IN GLOBAL SCOPE
//* DESPITE SAME NAME, TWO SEPERATE VARIABLES. THIS IS BECAUSE WE USE 'LET' IN THE FIRST AND NOT IN THE SECOND EXAMPLE.
//* IN SECOND EXAMPLE ALL WE'RE REALLY DOING IS GIVING OUR GLOBAL SCOPE A NEW VALUE





//* VAR VS LET
//* 3 KEY WORDS FOR VARIABLES, VAR, LET, AND CONST
/* CONSTANT IS ALWAYS CONSTANT VALUE
VAR- SCOPED TO NEAREST FUNCTION BLOCK
LET- SCOPED TO NEAREST ENCLOSING BLOCK
*/
var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest()
console.log(x);

//* OKAY SO WHAT THE FUCK IS GOING ON HERE?
//* NEW VARIABLE MADE 33
/* BUT INSIDE THAT FUNCTION, WE HAVE THE 45
AND INSIDE THAT BLOCK WE'RE RUNNING OUR CONSOLE.LOG 
IT ASSUMES WE'RE RUNNING THE 45
*/

let x = 12;
function letTest() {     //* YELLOW CURLY ARE FUNCTION BLOCL
    var x = 33;          //* VAR ONLY RESPECTS THE SCOPE OF THE FUNCTION
    if (1 == 1) {        //* PURPLE CURLY ARE ENCLOSING BLOCK
        let x = 45;      //* Let respects that we have stuff all over the function
        console.log(x);  //* BECAUSE WE CALL ENCLOSING FIRST
    }
    console.log(x);
}
letTest()
console.log(x);