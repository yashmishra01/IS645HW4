const values = [3, 11, 7, 2, 9, 10];
console.log(values.reduce((a, b) => a + b, 0));
let min = Math.min(...values);
console.log(`minimum value:${min}`);
let max = Math.max(...values);
console.log(`maximum value:${max}`);