function constructionCrew(alcholoicObj) {
    if (alcholoicObj.handsShaking) {
        let alchoholInTheBlood = (alcholoicObj.weight * 0.1) * alcholoicObj.experience;
        alcholoicObj.bloodAlcoholLevel += alchoholInTheBlood;
        alcholoicObj.handsShaking = false;
    }

    return alcholoicObj;
}

let testObj = {
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
};

console.log(constructionCrew(testObj));

