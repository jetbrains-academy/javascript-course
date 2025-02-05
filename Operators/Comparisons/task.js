let range = {
    start: -50,
    end: 30
};

let value = 15;

grantAccess = (value >= range.start) && (value < range.end);

console.log(grantAccess);
