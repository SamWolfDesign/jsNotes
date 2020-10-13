//* ARROW FUNCTIONS
//* ESS DIFF SYNTAX FOR A WAY TO WRITE FUNCTIONS
//* ESSENTIALLY A MORE CONDENSED WAY OF WRITING FUNCTION

//* CONCISE BODY
let hi = () => console.log('hi');

//* BLOCK BODY
//* WOULD BE USED IF MULTIPLE THINGS NEEDING RAN, SUCH AS ELSE IF
let hi = () => {
    console.log('hi');
}

//* CONCISE VS BLOCK
//* NO PAREN V  DUE TO ONLY ONE THING
let apples = x => console.log(`There are ${x} apples.`);
apples(10);

let apples = x => {
    console.log(`There are ${x} apples.`);
}
apples(8);

//* NOTICE HOW BOTH DO THE SAME THING, THE TOP (CONCISE) IS MUCH EASIER TO READ THOUGH.
