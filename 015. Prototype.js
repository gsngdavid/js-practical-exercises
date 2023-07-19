function Mammal() {
    this.legs = true;
    this.arms = true;
    this.run = function () {
        return this.name + " Can run";
    }
}

function Dog(name) {
    this.name = name
}

function Person(name, age) {
    this.name = name
    this.age = age
}

Dog.prototype = new Mammal();
Person.prototype = new Mammal();

const john = new Person('John Doe', 23);
const max = new Dog('Max');

console.log(max.run()); // Max Can run
console.log(john.run()); // John Doe Can run
