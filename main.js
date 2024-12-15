import { HashMapJS } from "./hashMap.js";
const test = HashMapJS();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// console.log(test.get("grape"));
console.log(test.get("hat"));
console.log(test.has("frog"));
console.log(test.remove("hat"));
