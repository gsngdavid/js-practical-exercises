function myMap(cb) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
}

