//* COMPARING ONE THING TO ANOTHER. WHICH GREATER? WHICH LESS THAN? ETC

//* EQUAL OPERATOR
console.log('3' == 3); //*MOST IMPORTANT. NOT CHECKING DATA TYPES. ONE STRING< ONE NUMBER
console.log( 3 == 3);
console.log('3' == '3');

//* STRICT EQUAL
console.log('3' === 3); //* COMES BACK FALSE
//* STRICT EQUALITY TAKES DATA TYPE INTO CONSIDERATION
console.log(3 === 3); //* COMES BACK TRUE

//* NOT EQUAL
console.log('3' != 3); //* BANG = !

//* STRICT NOT EQUAL
console.log('3' !== 3); //* TRUE THAT NOT EQUAL

//* GREATER THAN
3 > 2;

//* LESS THAN
2 < 3;

//* GREATER THAN OR EQUAL TO
3 >= 2

//* LESS THAN OR EQUAL TO
2 <= 3

//* AND
2 && 3

//* OR
2 || 3

//* ANOTHER EXAMPLE
console.log(3>2>1);
//* COORSION. 
console.log(3>2)
console.log(true>1) //* JAVASCRIPT DOING IT'S BEST TO COMPARE THE TWO. 
//* IN BACKGROUND SAING 1 GREATER THAN 1, NOT TRUE

function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());