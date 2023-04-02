
Задание 3


const getSumMain = function(n) {
    return function getSumInner(c) {
        return n + c;
    }
}

console.log(getSumMain(5)(7))