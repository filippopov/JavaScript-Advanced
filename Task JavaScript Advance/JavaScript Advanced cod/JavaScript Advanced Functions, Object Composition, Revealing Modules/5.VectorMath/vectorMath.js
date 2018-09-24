let test = (function() {
    return {
        add: function (vec1, vec2) {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
        },
        multiply: function (vec, number) {
            return [vec[0] * number, vec[1] * number];
        },
        length: function (vec) {
            return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
        },
        dot: function (vec1, vec2) {
            return (vec1[0] * vec2[0]) + (vec1[1] * vec2[1]);
        },
        cross: function (vec1, vec2) {
            return (vec1[0] * vec2[1]) - (vec1[1] * vec2[0]);
        }
    }
})();

console.log(test.add([1, 1], [1, 0]));
console.log(test.multiply([3.5, -2], 2));
console.log(test.length([3, -4]));
console.log(test.dot([1, 0], [0, -1]));
console.log(test.cross([3, 7], [1, 0]));