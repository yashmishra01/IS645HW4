let x = prompt("Enter a word:");
let l = x.toString().toLowerCase();

let a = l.split("");

let r = a.reverse().join("").toString();


let count = 0;

function fun1() {
    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u') {
            count++;
        }
    }
}

function fun2() {
    if (l == r) {
        console.log(`${x} contains ${count} vowels and is a palindrome.`)
    } else {
        console.log(`${x} contains ${count} vowels and is not a palindrome.`)
    }
}

fun1();
fun2();