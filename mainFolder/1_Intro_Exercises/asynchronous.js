// Why?
// Non-blocking

// When?
// Over the network: for instance fetch
// File handling (can take a long time to read/write to/save a file)
// setTimeout / setInterval
// databases, why?

// Promise:
// pending state
// fulfilled state
    // ^resolved and rejected state

const btrue = false;
new Promise((resolve, reject)=> {
    try {
        throw new Error("bomb!")
        resolve("Everything went well.")
    } catch (errMsg){
        reject("Something went wrong. " + errMsg) // errMsg is the new Error defined earlier.
    }
    
})
.then(msg => console.log(msg)) // then can have several callback arguments, second arg is error?
.catch(errMsg => console.log(errMsg))

function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Good")
            } catch {
                reject("Bad")
            }
        }, 4000)
    })
}

(async function callMyCustomPromise() {
    try {
        const message = await somethingGoodSomethingBad();
        console.log(message)
    } catch(errMsg) {
        console(errMsg)
    }
    
})() // an IIFE. "Immediately Invoked Function Expression". Gets called immediately. Doesn't need to be "called" after to run.

// slight delay for this call, because the above functions need to hoist first. "Solve" this by applying IIFE, see above.
//callMyCustomPromise()

// Async means a function is wrapped in a promise. It returns a promise.

// Check out Promise.all(), what is the practicality of it.