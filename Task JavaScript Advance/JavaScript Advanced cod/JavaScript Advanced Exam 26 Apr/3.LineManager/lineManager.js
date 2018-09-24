class LineManager {
    constructor(arrDepoObj){
        this.depoObj = arrDepoObj;
        this._currentStop = 0;
        this.durationOfMinutes = 0;
    }

    set depoObj(arrDepoObj){
        for (let arrDepoObjElement of arrDepoObj) {
            if (typeof arrDepoObjElement.name !== 'string' || arrDepoObjElement.name === '' || typeof arrDepoObjElement.timeToNext !== 'number' || arrDepoObjElement.timeToNext < 0) {
                throw new Error('Error');
            }
        }

        this._depoObj = arrDepoObj;
    }

    get atDepot(){
        if (this._currentStop === (this._depoObj.length - 1)) {
            return true
        }

        return false;
    }

    get nextStopName(){
        if (this.atDepot) {
            return 'At depot';
        }

        return this._depoObj[this._currentStop + 1].name;
    }

    arriveAtStop(minutes) {
        if (minutes < 0 || this.atDepot) {
            throw new Error('Error');
        }

        this.durationOfMinutes += minutes;
        this._currentStop++;
        return !this.atDepot;
    }

    get currentDelay(){
        let tempMinutes = 0;
        for (let i = 0; i < this._currentStop; i++) {
            tempMinutes += this._depoObj[i].timeToNext;
        }

        return this.durationOfMinutes - tempMinutes
    }

    toString(){
        let checkStation = this.atDepot ? '- Course completed\n' : `- Next stop: ${this.nextStopName}\n`;
        return `Line summary\n${checkStation}- Stops covered: ${this._currentStop}\n- Time on course: ${this.durationOfMinutes} minutes\n- Delay: ${this.currentDelay} minutes`;
    }
}

let man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());


