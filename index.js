function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        return "I have been returned";
    }
} 

function returnsAnAnonymousFunction() {
    return function() {
        return "I am an anonymous function";
    }
}