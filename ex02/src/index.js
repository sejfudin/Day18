function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for (let i = 1; i <= 5; i++) {
        yield(x = i);
        fifteenArray.push(i + "#");
    }
}

function* insideGenerator3() {
    for (let i = 6; i <= 10; i++) {
        if (i < 10) {
            yield(x = 1);
            fifteenArray.push(i + "#");
        } else {
            fifteenArray.push("undefined!");
        }
    }
}

function* insideGenerator2() {
    for (let i = 10; i <= 15; i++) {
        yield(x = i);
        fifteenArray.push(i + "#");
    }
}

const iterator = myGenerator();
const fifteenArray = [];
for (let i = 0; i < 17; i++) {
    iterator.next().value;
}
console.log(fifteenArray.join(", "));

module.exports = { fifteenArray, myGenerator };