function attachEventsListeners() {
    let toMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    let toKm = {
        km: 1,
        m: 0.001,
        cm: 0.0001,
        mm: 0.000001,
        mi: 1.60934,
        yrd: 0.0009144,
        ft: 0.0003048,
        in: 0.0000254
    };

    let toCm = {
        km: 0.00001,
        m: 0.01,
        cm: 1,
        mm: 10,
        mi: 0.000006213711922,
        yrd: 0.010936133,
        ft: 0.032808399,
        in: 0.393700787
    };

    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');

    let convert = document.getElementById('convert');

    convert.addEventListener('click', function () {
        switch (outputUnits.value) {
            case 'm':
                outputDistance.value = Number(toMeters[inputUnits.value]) * Number(inputDistance.value);
                break;
            case 'km':
                outputDistance.value = Number(toKm[inputUnits.value]) * Number(inputDistance.value);
                break;
            case 'cm':
                outputDistance.value = Number(toCm[inputUnits.value]) * Number(inputDistance.value);
                break;
        }
    });
}
