function add(x, y) { // husk terminology, function declarations are hoisted before code is run. Bubbles/hoisted to the top level of the script.
    return x+y;
}

const addInAVariable = function(x,y) { // anonymous
    return x+y;
}

const addArrowFunction = (x,y) => x+y // javascript has ASI - automatic semicolon insertion

//val addArrow = (_+_) // scarlet? what?

// look up currying (curry programming)

function  doActionWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name); // javascript doesn't have void, it has undefined.
}

const running = (name) => console.log(`${name} is running.`)

doActionWithSomeone(running, "Anders")

const passing = (name) => console.log(`${name} passed the ball to Erik `)

//doActionWithSomeone(passing, "Joe")
doActionWithSomeone((name) => console.log(`${name} passed the ball to Erik `), "Joe")