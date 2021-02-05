function anything() {
    console.log(22222);
}
console.log(11111);

setTimeout(anything, 0);

console.log(333333);

setInterval(() => {
    console.log('haha')
}, 2000);

