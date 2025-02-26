function generateNumbersPromise() {
  return new Promise((resolve) => {
    resolve([2, 4, 6, 8, 10]);
  });
}

function summarizeNumbers(numbersPromise) {
  return numbersPromise.then(function (numbers) {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  });
}

summarizeNumbers(generateNumbersPromise()).then(
  (result) => console.log(result), // 30
);
