function carFactory(oldObj) {
    let carEngine = {
        'small': {power: 90, volume: 1800},
        'normal': {power: 120, volume: 2400},
        'monster': {power: 200, volume: 3500},
    };

    let newCarObj = {
        model: oldObj.model
    };

    if (oldObj.power <= 90) {
        newCarObj.engine = carEngine['small'];
    } else if (oldObj.power <= 120) {
        newCarObj.engine = carEngine['normal'];
    } else {
        newCarObj.engine = carEngine['monster'];
    }

    if (oldObj.carriage === 'hatchback') {
        newCarObj.carriage = {
            type: 'hatchback',
            color: oldObj.color
        };
    } else if (oldObj.carriage === 'coupe') {
        newCarObj.carriage = {
            type: 'coupe',
            color: oldObj.color
        };
    }

    let wheel = oldObj.wheelsize;
    if (oldObj.wheelsize % 2 === 0) {
        wheel--;
    }

    let wheels = [];

    for (let i = 0; i < 4; i++) {
        wheels.push(wheel);
    }

    newCarObj.wheels = wheels;

    return newCarObj;
}

let testObj = { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 };

console.log(carFactory(testObj));;
