

function output(data) {
    let result = [];
    for (let arr in data) {
        let width = data[arr][0];
        let height = data[arr][1];
        let r = createRectangle(width, height);
        result.push(r);
    }

    result =  result.sort((a, b) => (a.compereTo(b) < b.compereTo(a)));
    return result;

    function createRectangle (width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: function () {
                return rectangle.width * rectangle.height;
            },
            compereTo: function (other) {
                let result = rectangle.area() - other.area();
                return result || rectangle.width - other.width
            }

        };

        return rectangle;
    }
}




let input = [[1,20],[20,1],[5,3],[5,3]];
let test = output(input);
console.log(test.length);





