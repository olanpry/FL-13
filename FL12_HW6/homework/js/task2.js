let a = prompt('Enter a', '');
let b = prompt('Enter b', '');
let c = prompt('Enter c', '');
if (isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '') {
    alert('Input values should be ONLY numbers');
} else if (+a === 0 || +b === 0 || +c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    if (+a + +b > +c && +a + +c > +b && +b + +c > +a) {
        if (+a === +b && +b === +c) {
            console.log('Equilateral triangle');
        } else if (+a === +b || +a === +c || +b === +c) {
            console.log('Isosceles triangle');
        } else {
            console.log('Scalene triangle');
        }
    } else {
        alert('Triangle doesn’t exist');
    }
}