let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);

var arr = [...rockStar];




function newStar(x) {


    var newArray = [];
    for (let i = 0; i < x.length; i++) {


        if (x[i][0].charAt(0) > 'a') {
            newArray.push(`${x[i][0]} => ${x[i][1]}`);

        }

    }

    return newArray.join(", ");

}



let newRock = new Map();
newRock.set((newStar(arr)));
console.log(newRock);