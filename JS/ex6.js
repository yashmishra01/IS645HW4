let x = Math.floor((Math.random() * 100) + 1);
console.log(`Random value generated=${x}`)
let y = 0;
let i = 0;
while (x != y) {
    y = prompt("guess the random number from 1 to 100!");
    if (y < x) {
        alert("too low");
        i++;
    } else if (y > x) {
        alert("too high");
        i++;
    }
}
i++;

console.log(`correct! It took you ${i} attempts to guess the correct number.`);