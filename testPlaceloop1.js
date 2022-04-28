let { daysSelected, hoursToAdd, openingHours } = require('./testPlaceloopData.js');
let checkDigit = false;

const addSchedule = (daysSelected, hoursToAdd) => {
    Object.keys(openingHours).forEach(day => {
        let timeFree = checkCollisions(day);
        if (daysSelected[day] && !checkDigit && timeFree) {
                openingHours[day].push(hoursToAdd);
                sortOpeningHoursAscending(openingHours[day]);
        } else if (!timeFree) {
            stopTest("L'horaire n'est pas disponible");
        }
    });
}

const checkCollisions = (day) => {
    let timeFree = true;
    openingHours[day].forEach(hours => {
        hoursBegin = getHoursAndMinutesDays(hours.begin);
        hoursEnd = getHoursAndMinutesDays(hours.end);
        hoursToAddBegin = getHoursAndMinutesDays(hoursToAdd.begin);
        hoursToAddEnd = getHoursAndMinutesDays(hoursToAdd.end);

        if ((hoursToAddBegin > hoursBegin && hoursToAddBegin < hoursEnd) || (hoursToAddBegin < hoursBegin && hoursToAddEnd > hoursBegin) ||
            (hoursToAddBegin < hoursEnd && hoursToAddEnd >= hoursEnd) || (hoursToAddBegin >= hoursBegin && hoursToAddEnd <= hoursEnd) ||
            (hoursToAddBegin <= hoursBegin && hoursToAddEnd >= hoursEnd)) {
                timeFree = false;
        }
    });
    return timeFree;
};

const getHoursAndMinutesDays = (hours) => {
    const hoursDays = hours.split(':');
    const getHoursDays = hoursDays[0];
    const getMinutesDays = hoursDays[1];
    const hoursConverted = getHoursDays + getMinutesDays / 100;

    if (getHoursDays < 0 || getMinutesDays < 0 || isNaN(hoursConverted)) {
        checkDigit = true;
        stopTest("L'horaire est invalide");
    }    
    return hoursConverted;
};

const sortOpeningHoursAscending = (hours) => {
    hours.sort((a, b) => {
        const hourA = getHoursAndMinutesDays(a.begin);
        const hourB = getHoursAndMinutesDays(b.begin);
        return hourA - hourB;
    });
};

const stopTest = (reason) => {
    throw new Error(reason);
};

addSchedule(daysSelected, hoursToAdd);
console.log(openingHours);