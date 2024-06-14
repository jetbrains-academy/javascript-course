let numbers = ["One", "Two", "Three", "Four", "Five"]
let answer = []

let a = numbers.shift()
let b = numbers.shift()
answer.push(b)
answer.push(a)

console.log(numbers)
console.log(answer)
