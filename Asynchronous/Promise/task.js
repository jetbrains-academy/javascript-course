function delayedGreeter(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("Name is required"));
    }
    setTimeout(() => resolve(`Hello, ${name}`), 1000);
  });
}

delayedGreeter(null).then(
  function (value) {
    console.log(value); // doesn't execute
  },
  function (error) {
    console.log(error.message); // Name is required
  },
);

delayedGreeter("John").then(
  function (value) {
    console.log(value); // Hello, John
  },
  function (error) {
    console.log(error.message); // doesn't execute
  },
);
