const chicken = {
    sound: "laijdwliajd" // this is called a key-value pair, sound being key, the string being the value.
};

console.log(chicken.sound); // dot notation, IntelliSense applies help 
console.log(chicken["sound"]) // square bracket notation, IntelliSense does not help, but there are cases for it (PHP example), if the keyname is dynamic

const numbers = [1, 345, 57, 2, 32] // slice or spread are both valid but don't do the same thing. One returns an array, the other copies.