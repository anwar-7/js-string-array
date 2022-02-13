const products = [
  'Dell hardcore i29 200GB laptop',
  'iphone 1TB camera flashlight Phone',
  'yellow laptop with black camera',
  'Dell 1X59 Lenovo commercial yoga laptop',
  'LG supernova laptop Dell',
  'HTC low price Phone',
  'Dell purple color phone with Laptop',
];

// indexOf
/* 
const searching = 'laptop';
const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
console.log(output);
 */

// includes()
/* 
const searching = 'laptop';
const output = [];
for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
 */

// startsWith()
/* 
const searching = 'Dell';
const output = [];
for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
 */

// endsWith()
/* 
const searching = 'Dell';
const output = [];
for (const product of products) {
  if (product.toLowerCase().endsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
 */
