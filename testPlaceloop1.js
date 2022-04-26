let { daysSelected, hoursToAdd, openingHours } = require('./testPlaceloopData.js');

const addSchedule = (daysSelected, hoursToAdd) => {
    for (let day in daysSelected) {
        if (daysSelected.hasOwnProperty(day) && daysSelected[day]) {
            openingHours[day].push(hoursToAdd);
            openingHours[day] = sortOpeningHoursAscending(openingHours[day]);
        }
    }
};

const getHoursAndMinutesDays = (hours) => {
    const hoursDays = hours.split(":");
    const getHoursDays = parseInt(hoursDays[0]);
    const getMinutesDays = parseInt(hoursDays[1]);

    console.log(getHoursDays, getMinutesDays);
    
    return { getHoursDays, getMinutesDays };
};

const sortOpeningHoursAscending = (hours) => {
    return hours.sort((a, b) => {
        const { getHoursDays: hourDayA, getMinutesDays: minuteDayA } = getHoursAndMinutesDays(a.begin);
        const { getHoursDays: hourDayB, getMinutesDays: minuteDayB } = getHoursAndMinutesDays(b.begin);
        return ((hourDayA - hourDayB) || ((hourDayA === hourDayB) && (minuteDayA - minuteDayB)));
    });
};

addSchedule(daysSelected, hoursToAdd);
console.log(openingHours);