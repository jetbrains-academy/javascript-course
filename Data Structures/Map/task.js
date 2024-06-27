let fruitWeights = new Map();  // Stores fruits weight in kilograms
fruitWeights.set("Orange", 0.28)
fruitWeights.set("Pineapple", 1.34)
fruitWeights.set("Apple", 0.217)
fruitWeights.set("Tomato", 0.09)

console.log(fruitWeights);

fruitWeights.delete("Tomato")
fruitWeights.set("Pomelo", 1.45)

console.log(fruitWeights);