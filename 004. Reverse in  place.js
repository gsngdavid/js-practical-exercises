function reverseInPlace(str) {
    return str.replace(/\w+/g, word => word.split('').reverse().join(''));
}