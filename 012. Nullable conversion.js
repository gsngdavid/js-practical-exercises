function convertNullableValues(obj) {
    for(let key in obj) {
        obj[key] = obj[key] === undefined ? "" : obj[key];
        obj[key] = obj[key] === null ? 0 : obj[key];
    }
    return obj;
}