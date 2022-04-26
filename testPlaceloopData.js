let daysSelected = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false
};

let hoursToAdd = { begin: '19:00', end: '23:00' };

let openingHours = {

    monday: [
        { begin: '13:00', end: '18:00' },
        { begin: '10:00', end: '12:00' },
    ],
    tuesday: [
        { begin: '10:00', end: '12:00' },
        { begin: '13:00', end: '18:00' },
    ],
    wednesday: [
        { begin: '10:00', end: '12:00' },
        { begin: '13:00', end: '18:00' },
    ],
    thursday: [
        { begin: '10:00', end: '12:00' },
        { begin: '13:00', end: '18:00' },
    ],
    friday: [],
    saturday: [],
    sunday: []
};

module.exports = { daysSelected, hoursToAdd, openingHours };