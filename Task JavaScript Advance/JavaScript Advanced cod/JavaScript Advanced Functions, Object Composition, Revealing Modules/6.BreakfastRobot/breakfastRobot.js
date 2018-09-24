let manager = function () {
    let resourceArr = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    let createRec = {
        'apple': {
            'protein': 0,
            'carbohydrate': 1,
            'fat': 0,
            'flavour': 2
        },
        'coke': {
            'protein': 0,
            'carbohydrate': 10,
            'fat': 0,
            'flavour': 20
        },
        'burger': {
            'protein': 0,
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        },
        'omelet': {
            'protein': 5,
            'carbohydrate': 0,
            'fat': 1,
            'flavour': 1
        },
        'cheverme': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        },
    };


    return function(text) {
        let params = text.split(' ');
        let myRob = {
            'restock': function (resurce, amount) {
                if (resourceArr.hasOwnProperty(resurce)) {
                    resourceArr[resurce] += Number(amount);
                }

                return 'Success';
            },
            'prepare': function (rec, quantity) {
                let miel = createRec[rec];

                let protein =  0;
                let carbohydrate = 0;
                let fat = 0;
                let flavour = 0;

                protein = miel['protein'] * quantity;
                carbohydrate = miel['carbohydrate'] * quantity;
                fat = miel['fat'] * quantity;
                flavour = miel['flavour'] * quantity;

                let isCreate = true;
                if (resourceArr['protein'] < protein || resourceArr['carbohydrate'] < carbohydrate || resourceArr['fat'] < fat || resourceArr['flavour'] < flavour) {
                    isCreate = false;
                }

                if (isCreate) {
                    resourceArr['protein'] -= protein;
                    resourceArr['carbohydrate'] -= carbohydrate;
                    resourceArr['fat'] -= fat;
                    resourceArr['flavour'] -= flavour;
                    return 'Success';
                } else {
                    let ingredient = '';
                    if (resourceArr['protein'] < protein) {
                        ingredient = 'protein';
                    } else if (resourceArr['carbohydrate'] < carbohydrate) {
                        ingredient = 'carbohydrate';
                    } else if (resourceArr['fat'] < fat) {
                        ingredient = 'fat';
                    } else if (resourceArr['flavour'] < flavour) {
                        ingredient = 'flavour';
                    }

                    return `Error: not enough ${ingredient} in stock`;
                }
            },
            'report': function () {
                return `protein=${resourceArr['protein']} carbohydrate=${resourceArr['carbohydrate']} fat=${resourceArr['fat']} flavour=${resourceArr['flavour']}`;
            }
        };

        return myRob[params[0]](params[1], params[2]);
    }

};

manager = manager();