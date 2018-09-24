let obj = (function () {
    let id = 0;

    return class Extensible {
        constructor(){
            this.id = id++;
        }

        extend(template) {
            for (let row in template) {
                if (typeof template[row] == 'function') {
                    Extensible.prototype[row] = template[row];
                } else {
                    this[row] = template[row];
                }
            }
        }
    };

})();


let template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
};


let test = new obj();
test.extend(template);
console.log(template);

