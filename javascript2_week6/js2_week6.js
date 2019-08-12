//1.

function foo(bar) {
    function foobar() {
        console.log("Hello, I am " + bar + "!");
    }
    return foobar;
}

var greet = foo("bar");
greet();


//2.

function threeCallback(i) {
    console.log(i + " is divisible by 3")
}

function fiveCallback(i) {
    console.log(i + " is divisible by 5")
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    var inclusiveArray = [];
    for (var i = startIndex; i <= stopIndex; i++){
        if (i % 3 == 0){
            inclusiveArray.push(i);
            threeCallback(i);
        };
        if (i % 5 == 0){
            inclusiveArray.push(i);
            fiveCallback(i);
            }
        };
        return inclusiveArray;
    }

threeFive(10, 15, threeCallback, fiveCallback);


//3.

var arr3d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], arrText = '';

for (var i = 0; i < arr3d.length; i++) {
    for (var j = 0; j < arr3d[i].length; j++) {
            arrText += arr3d[i][j] + ' ';
    }
    console.log(arrText);
    arrText = '';
}


//4.

let x = 9; 
function f1(val) { 
    val = val + 1; 
    return val;
}
f1(x);
console.log(x);

/* Pass by value: When the variable is passed into the function, a copy of it is passed.
The original variable remains unaltered. */

let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

/* Pass by reference: When variables are passed into functions they can be changed, 
because they are given the same memory address. */


//5.

function createBase(x) {
    return function addSix (y) {
    return (x+y) };
};

let addSix = createBase(6);
console.log(addSix(10)); 
console.log(addSix(21)); 


//Bonus

let uniqueArray = new Set(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']);
console.log(uniqueArray);
console.log(uniqueArray.size);
//The "Set" object is a new feature of ES6. It is used to hold unique values in an array.