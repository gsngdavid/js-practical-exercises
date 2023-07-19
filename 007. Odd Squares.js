function oddSquares(arr) {
    return arr.filter(el => el % 2 !== 0).map(el => el * el);
}