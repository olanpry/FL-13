let a = +prompt('Enter a', '');
let b = +prompt('Enter b', '');
let c = +prompt('Enter c', '');
const FOUR = 4;
const TWO = 2;
const TEN = 10;

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
   alert('Invalid input data');
} else {
    let d = b * b - FOUR * a * c;
    if (d < 0) {
        alert('No solutin, D < 0');
    } else if (d === 0) {
        let x = -b / TWO * a;
        alert('x = ' + x);
    } else {
        let x1 = (-b + Math.sqrt(d)) / (TWO * a);
        let x2 = (-b - Math.sqrt(d)) / (TWO * a);
        alert('x1 = ' + Math.floor(x1 * TEN) / TEN + ';' + ' x2 = ' + Math.floor(x2 * TEN) / TEN);
    }
}