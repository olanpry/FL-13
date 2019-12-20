let a = +prompt('Enter a', '');
let b = +prompt('Enter b', '');
let c = +prompt('Enter c', '');

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
   alert('Invalid input data');
} else {
    let d = b * b - 4 * a * c;
    console.log(d);
    if (d < 0) {
        alert('No solutin, D < 0');
    } else if (d === 0) {
        let x = -b / 2 * a;
        alert('x = ' + x);
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert('x1 = ' + Math.floor(x1 *10)/10 + ';' + ' x2 = ' + Math.floor(x2 *10)/10);
    }
}