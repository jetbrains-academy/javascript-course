let data = {
    a: null,
    b: -2,
    c: ""
};

console.log(!!(data.a || data.b));  // should be true
console.log(!!data.b);  // should be true
console.log(!data.c);   // should be true
