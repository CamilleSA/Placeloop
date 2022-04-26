let { daysSelected, hoursToAdd, openingHours } = require('./testPlaceloopData.js');

const addSchedule = (daysSelected, hoursToAdd) => {
    for (let day in daysSelected) {
        if (daysSelected.hasOwnProperty(day) && daysSelected[day]) {
            openingHours[day].push(hoursToAdd);
        }
    }
};

addSchedule(daysSelected, hoursToAdd);
console.log(openingHours);