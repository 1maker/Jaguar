function my_sin(x, precision) {

    let sum = 0;
    let n = precision;

    function factorial(n) {
        return (n !== 1) ? n * factorial(n - 1) : 1;
    }

    while (n > 0) {

        sum += Math.pow(-1, n - 1) / factorial(2 * n - 1) * Math.pow(x, 2 * n - 1);
        n--;
    }

    return sum;
}

function Car(direction, passengers, func) {

    this.direction = direction;
    this.passengers = passengers;
    this.style_of_driving = func();
}

let jaguar = new Car('straight', 1, function () { return Math.sin(0.65)});
let volvo = new Car('left', 1, () => Math.sin(0.65));
let lada = new Car('right', 2, function style() { return Math.sin(0.65)});

console.log('jaguar', jaguar);
console.log('volvo', volvo);
console.log('lada', lada);

