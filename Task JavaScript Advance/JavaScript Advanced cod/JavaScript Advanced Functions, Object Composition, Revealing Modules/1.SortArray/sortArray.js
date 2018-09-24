function solve(arr, type) {
    let sortObj = {
        'asc' : function (arr) {
            return arr.sort((a, b) => a - b);
        },
        'desc' : function (arr) {
            return arr.sort((a, b) => b - a);
        }
    };

    return sortObj[type](arr);
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');