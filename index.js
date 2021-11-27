function receivesAFunction(cbf) {
    return cbf()
}

function returnsANamedFunction() {
    return function named(color){
        `My favorite color is ${color}!`
    }
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log(`How are you?`)
    }
}