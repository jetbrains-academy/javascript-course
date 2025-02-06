function greeting(person) {
    if (!("name" in person) || !("surname" in person)) {
        throw new Error("A person must have a name and a surname");
    }
    return `Hello, ${person.name} ${person.surname}!`;
}

let bob = {
    name: "Bob",
    surname: "Thomson",
    age: 21,
};

let cat = {
    name: "Tom",
    breed: "Persian",
    age: 3,
};

try {
    console.log(greeting(bob));  // Hello, Bob Thomson!
    console.log(greeting(cat));  // will not print anything
} catch (e) {
    console.log(e.message);  // A person must have a name and a surname
}
