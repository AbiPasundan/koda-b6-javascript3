const array = [1, 4, 9, 16];

// Pass a function to map
const mapped = array.map((x) => x * 2);

console.log(mapped);
// Expected output: Array [2, 8, 18, 32]

let newArray = []
for (let i = 0; i < array.length; i++) {
    let newValue = array[i] * 2
    newArray.push(newValue)
}
console.log(newArray);