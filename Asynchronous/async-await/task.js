async function generator(number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(number), number);
  });
}

async function collector(number1, number2) {
  let arr = [];
  arr.push(await number1);
  arr.push(await number2);
  return arr;
}

collector(generator(100), generator(200)).then(console.log);
