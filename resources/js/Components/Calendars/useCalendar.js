export const days = [
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday",
    "Sunday", 
];

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const useWeekNumber = (date) => {
    let firstDay = new Date(date.getFullYear(), 0, 1);

    let days = Math.floor((date - firstDay) / (24 * 60 * 60 * 1000));
         
    return Math.ceil(days / 7);
};
