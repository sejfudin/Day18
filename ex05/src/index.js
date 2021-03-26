let shopingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]);

var arrKey = [];
var arrValues = [];

for (let key of shopingList.keys()) {
    arrKey.push(key);
    console.log(`groceries: ${key}`);
}
for (let value of shopingList.values()) {
    arrValues.push(value);
    console.log(`amount: ${value}`);
}
for (let entrie of shopingList.entries()) {
    arrValues.push(entrie);
    console.log(entrie);
}
module.exports = { shopingList, arrKey, arrValues };