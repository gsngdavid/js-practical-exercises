function createCounter() {
    let counter = 0;

    function counterFn() {
        return ++counter;
    }

    return counterFn;
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();
counter1();
counter2();
counter2();
counter1();
console.log(counter1());
console.log(counter2());
