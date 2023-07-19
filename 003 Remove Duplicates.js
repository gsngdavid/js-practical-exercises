function removeDuplicates(arr) {
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
}