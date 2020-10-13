//* RETURNS
//* KEYWORD THAT BRINGS DATA OUT OF FUNCTION
//* BASICALLY, WHEN CALLED, FUNCTION BECOMES VALUE OF RETURN
//* CONSOL LOGING MAINLY FOR TESTING, NOT EXECUTION

let name = fName => {
    return 'Finn'     //*<<<<<< TELLS NAME TO RETURN FINN
}
//* NOTE THERE IS NO CONSOLE LOG ABOVE

let myName = name();
console.log(myName);

console.log(name())
//* NOTE THAT ABOVE CONSOLE LOG IS SAME AS PREVIOUS


//* CHALLENGE
//* USE A FUNCTION TO MAKE A TIP CALCULATOR
//* HAVE IT RETURN THE VALUE
//* CAPTURE RETURN VALUE IN A VARIABLE
//* PRINT THAT VARIABLE 


let tip = myFunction(18.50, .20);
function myFunction(a, b) {
    return a * b;
}
console.log(`It is polite to tip ${tip} dollars`);

//* INSTRUCTOR SOLUTION
function tipCalc(bill){
    let tip = bill * 0.2;
    return tip.toFixed(2) //* toFixed sets the amt of dec places it goes out
}
let totalTip = tipCalc(19.72);
console.log(totalTip);

//* ANOTHER EXAMPLE
//* NOTE THAT USING THE ARROW FUNCTION DOES NOT REQUIRE A 'RETURN'
//* RETURN IS ESSENTIALLY TELLING JAVA SCRIPT THAT "WE'RE DONE HERE"
let tipCalc = bill => bill * 0.2;
let totalTip = tipCalc(19.72)
console.log(totalTip)

//* REMEMBER RETURN ADDS TO A FUNCTION


//* ANOTHER EXAMPLE OF A RETURN
//* THIS ONE IS LARGER BUT ALSO USES A RETURN
function capitalizeName(name) {
    let capName = '';
    for (pizza in name) {  //* PLEASE NOTE THAT PIZZA HERE CAN BE ANYTHING
        // console.log(l)  //* <<<< HAVING THIS HERE IS WHAT IS MAKING THE 0-10 WHEN RUN. LITERALLY COUNTING ALL THE INDEXES
        if (pizza == 0) {
            capName += name[pizza].toUpperCase();
        } else {
            capName += name[pizza].toLowerCase();
        }
    }
    return capName
}
console.log(capitalizeName('sAmMmMmMmMy'))
//* THIS WHOLE THANG TAKES THE ARGUMENT (sAmMmMmMmMy) and makes the S cap and everything else lower

