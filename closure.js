function makeCounter() { 

    let count_1 = 70;

    return function () {

        let count_2 = 700;

        return function () {

            let count_3 = 7000;

            return function () {

                console.log('Глянь, работает код!');

                return {
                    count_1: () => count_1++,
                    count_2: () => count_2++,
                    count_3: () => count_3++
                };
            }
        }
    }
}

let counter = makeCounter();

let first, second, third = {count_1: first, count_2: second, count_3: third } = counter()()();

console.log('1. first()', first(), 'second()', second(), 'third()', third());
console.log('2. first()', first(), 'second()', second(), 'third()', third());
console.log('3. first()', first(), 'second()', second(), 'third()', third());
console.log('4. first()', first(), 'second()', second(), 'third()', third());
console.log('5. first()', first(), 'second()', second(), 'third()', third());

/*let count_1 = 10;
let count_2 = 100;
let count_3 = 1000;

{

    let obj = {
        count_1_: () => count_1++,
        count_2_: () => count_2++,
        count_3_: () => count_3++
    };

    console.log(obj.count_1_());
    console.log(obj.count_1_());
    console.log(obj.count_1_());

    console.log(obj.count_2_());
    console.log(obj.count_2_());
    console.log(obj.count_2_());

    console.log(obj.count_3_());
    console.log(obj.count_3_());
    console.log(obj.count_3_());
}
*/


