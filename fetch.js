// const person = {
//   name: "hero alom",
//   village: "doriyar tek",
//   city: "magura",
//   friends: ["abul", "babul", "kamal", "john"],
//   father: { name: "kalimantan", age: 10, hometown: "sylhet" },
// };
// const jsonString = JSON.stringify(person);
// console.log(jsonString);
// const plainData = JSON.parse(jsonString)
// console.log(plainData);
// const keys = Object.keys(person);
// const converted = keys
// const values = Object.values(person);
// console.log(values);

const products = [
  { name: "xiomi", brand: "xiomi", price: 34000, color: "black" },
  { name: "samsung", brand: "sam", price: 34000, color: "black" },
  { name: "iphone", brand: "apple", price: 134000, color: "black" },
  { name: "nokia", brand: "kallu", price: 3000, color: "black" },
];
const names = ["abul", "babul", "lala", "hero alom"];
const remainingArray = [...products, names];
const condition = products.filter((p) => p.brand !== "sam");
const newArray = [...condition, remainingArray];
console.log(newArray);
