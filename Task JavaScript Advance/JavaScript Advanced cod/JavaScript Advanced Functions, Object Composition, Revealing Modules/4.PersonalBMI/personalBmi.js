function bmiTest(name, age, weight, height) {
    let heightM = height /100;
    let bmi = Math.round(weight / Math.pow(heightM, 2));
    let bmiStatus = '';
    switch (true) {
        case bmi < 18.5:
            bmiStatus = 'underweight';
            break;
        case bmi < 25:
            bmiStatus = 'normal';
            break;
        case bmi < 30:
            bmiStatus = 'overweight';
            break;
        case bmi > 30:
            bmiStatus = 'obese';
            break;
    }

    let bmiObj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: bmiStatus
    };

    if (bmiStatus === 'obese') {
        bmiObj['recommendation'] = 'admission required';
    }

    return bmiObj;
}

console.log(bmiTest('Peter', 33, 72, 172));