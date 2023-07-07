const numbers = ["1", "2", "3", "4", "5", "6", "7"];
const ram = [];
const even = numbers.filter((i) => {
  if (i % 2 === 0) {
    ram.push(i);
  }
});
console.log(ram);
