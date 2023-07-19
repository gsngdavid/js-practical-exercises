function gcd(x, y) {
    while(y !== 0) return gcd(y, x % y);
    return x;
}