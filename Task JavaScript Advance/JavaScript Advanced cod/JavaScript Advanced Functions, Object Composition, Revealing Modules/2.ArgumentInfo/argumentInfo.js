function mapping () {
    let myMapObj = new Map();

    for (let argument of arguments) {
        let checkType = typeof argument;

        if (!myMapObj.has(checkType)) {
            myMapObj.set(checkType, 0);
        }

        myMapObj.set(checkType, myMapObj.get(checkType) + 1);

        console.log(`${checkType}: ${argument}`);
    }

    [...myMapObj].sort((a, b) => b[1] - a[1]).forEach(x => console.log(`${x[0]} = ${x[1]}`));
}


mapping('cat', 42, function () { console.log('Hello world!'); });