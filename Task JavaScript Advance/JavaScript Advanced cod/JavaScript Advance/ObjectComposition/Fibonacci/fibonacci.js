


function fibResult () {
    let counter = 0;
    return function fibonacci() {
        let f1 = 0;
        let f2 = 1;

        for (let i = 0; i <= counter; i++) {
            let f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
        }
        counter++;
        return f1;
    }
}

let f = fibResult();


f();
f();
f();
f();
f();




