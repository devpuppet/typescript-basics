const inputText = '';
let storedData = inputText ?? 'Default';

console.log("Empty input: " + storedData);

const nullText = null;
storedData = nullText ?? 'Default';
console.log("null data: " + storedData); 