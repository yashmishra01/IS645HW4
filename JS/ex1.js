n1 = Number(prompt("enter number 1"));
n2 = Number(prompt("enter number 2"));
op = prompt("enter mathematical operation to be performed (+,-,*,/):");

if (op === '+') {
    console.log(n1 + "+" +
        n2 + "=" +
        (n1 + n2));
} else if (op === '-') {
    console.log(n1 + "-" +
        n2 + "=" +
        (n1 - n2));
} else if (op === '*') {
    console.log(n1 + "*" +
        n2 + "=" +
        (n1 * n2));
} else if (op === '/') {
    console.log(n1 + "/" +
        n2 + "=" +
        (n1 / n2));
}