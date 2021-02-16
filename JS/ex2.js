const r = Number(prompt("Enter the circle radius:"));
const circle = {
    area() {
        return Math.PI * r * r;
    },
    circumference() {
        return Math.PI * 2 * r;
    }
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is${circle.area()}`);