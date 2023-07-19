function myMap(cb) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
}

function myFilter(cb) {
    const result = this;

    for(let i = 0; i < this.length; i++) {
        if(!cb(this[i], i, this)) result.splice(i, 1);
    }
    return result;
}

