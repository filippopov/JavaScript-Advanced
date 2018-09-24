(function () {
    String.prototype.ensureStart = function (str) {
        let testValue = this + '';
        let pattern = new RegExp(`^${str}`);
        if (pattern.test(testValue)) {
            return testValue;
        }

        return str + this;
    };

    String.prototype.ensureEnd = function (str) {
        let testValue = this + '';
        if (testValue.indexOf(str) >= 0) {
            return testValue;
        }

        return this + str;
    };

    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex != -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    };

    String.format = function () {
        let newString = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            newString = newString.replace(`{${i - 1}}`, arguments[i]);

        }

        return newString;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    }
})();

let test = 'the quick brown fox jumps over the lazy dog';


console.log(test.truncate(43));

