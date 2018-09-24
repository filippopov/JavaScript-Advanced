function solve() {
    let myObj = {
        extend : function (template) {
            for (let prop in template) {
                if (typeof template[prop] === 'function') {
                    Object.getPrototypeOf(myObj)[prop] = template[prop];

                } else {
                    this[prop] = template[prop]
                }
            }
        }
    };

    return myObj
}

let test = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
};


let test1 = solve();

test1.extend(test);

console.log(Object.getPrototypeOf(test1));