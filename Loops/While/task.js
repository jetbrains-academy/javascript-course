function gcd(a, b) {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

console.log(gcd(10, 5))  // 5
console.log(gcd(17, 13)) // 1
console.log(gcd(36, 24)) // 12