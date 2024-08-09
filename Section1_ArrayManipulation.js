function ArrayManipulation(arr) {
  return arr.map(num => num % 2 === 0 ? num * 2 : num);
}

// Example usage:
const ipArray = [1, 2, 3, 4];
const opArray = ArrayManipulation(ipArray);
console.log(opArray); // [1, 4, 3, 8]
