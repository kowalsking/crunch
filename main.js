//Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.

function chunk(arr, m) {
    const result = [];

    while (arr.length) {
        let a = arr.slice(0,m);
        result.push(a);
        for (let i = 0; i < m; i++) {
            arr.shift();
        }
    }
    console.log(result);
}

chunk([1,2,3,4],2)


// Function.prototype.bind

function bind(context) {
    let fn = this;
    let args = arguments;
    return function() {
        let key = Date.now().toString() + Math.random();
        context[key] = fn;
        let result = context[key]([].concat(args, arguments).slice(1));
        delete context[key];
        return result;
    }
}