
                                            //DZ_17


function main(a = 2, b = 3, c) {

    if (typeof с === 'function') {
        return c(a, b)
    }
    return sum(a, b);
}

function sum(a, b) {
    return a + b;
}

console.log(main());
console.log(main(1, 2, sum));