function aggregates (arr) {
    function reduce(arr, func) {
        let result = arr[0];
        for (let element of arr.slice(1)) {
            result = func(result, element);
        }

        return result;
    }

    console.log('Sum = ' + reduce(arr, (a, b) => (a + b)));
    console.log('Min = ' + reduce(arr, (a, b) => (a < b ? a : b)));
    console.log('Max = ' + reduce(arr, (a, b) => (a > b ? a : b)));
    console.log('Product = ' + reduce(arr, (a, b) => (a * b)));
    console.log('Join = ' + reduce(arr, (a, b) => ('' + a + b)));
}

aggregates([2,3,10,5]);






