let a = 10;

func();

console.log("[global] a:", a);

function func() {
  let b = 20;
  console.log("[func] a:", a);
  console.log("[func] b:", b);
}

let b = 20;

console.log("[global] b:", b);
