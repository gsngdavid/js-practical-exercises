function transformKeys(obj, cb) {
    for(key in obj) {
        const newKey = cb(key);
        obj[newKey] = obj[key];
        delete obj[key];
    }
    return obj;
}

function keyTrans(key) {
    let upper = false;
    return key.replace(/\w/g, c => {
        upper = !upper;
        return upper ? c.toUpperCase() : c.toLowerCase();
    })
}

const obj = {
    fullName: 'John Doe',
    age: 34,
}

console.log(transformKeys(obj, keyTrans));