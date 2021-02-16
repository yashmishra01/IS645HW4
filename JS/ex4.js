let a = []
let x = prompt('Enter word:');
while (x.toLowerCase() != 'stop') {
    a.push(x);
    x = prompt('Enter another word:');
}

if (a.length == 0) {
    console.log("No words to display, Stop was the first word entered.")
} else {
    console.log(`You entered the following words:\n${a}`);
}