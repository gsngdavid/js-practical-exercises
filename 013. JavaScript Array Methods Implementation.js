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

function myForEach(cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

function myReduce(cb, acc = this[0]) {
    let i = arguments[1] ? 0 : 1;
    
    while(i < this.length) {
        acc = cb(acc, this[i], i, this);
        i++;
    }
    return acc;
}