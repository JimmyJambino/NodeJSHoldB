// strictmode checks on coding practices and enforces them with errors rather than warnings.
// "use strict"; position is important, look it up.

// Bad practice
//var globalVariable = "Don't do this"; // global
//whataboutthis = "is this okay?"; // Even more global? Never ever do this.

const memeTop = "Mom: We have Javascript at home"; 
let memeBottom  ="Javascript at home: Node.js";

let someValue = true;
{
    let someValue = false;
}
console.log(someValue); // true

let someValue = true;
{
    someValue = false;
}
console.log(someValue); // false

for (let i = 0; i < 10; i++) {
    setTimeout(()=> {
        
    },1000)
}

for (var i = 0; i < 10; i++) {
    setTimeout(()=> {
        console.log(i)
    })
}