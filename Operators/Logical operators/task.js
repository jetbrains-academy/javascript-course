let pass = {
    warehouseAccess: true,
    guest: false,
    blocked: false
};

let grantAccess = pass.warehouseAccess && ! pass.guest && ! pass.blocked;

console.log(grantAccess);
