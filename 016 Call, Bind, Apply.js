function findMax() {
    return Math.max(...this);
}

function capitalize() {
    return this[0].toUpperCase() + this.slice(1);
}


console.log(findMax.apply([34, 12, 57, 28, 91]));
console.log(capitalize.call('john'));