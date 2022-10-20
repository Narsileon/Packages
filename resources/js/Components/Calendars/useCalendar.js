export const days = [
    "monday", 
    "tuesday", 
    "wednesday", 
    "thursday", 
    "friday", 
    "saturday",
    "sunday", 
];

export const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];

export const useWeekNumber = (date) => {
    let firstDay = new Date(date.getFullYear(), 0, 1);

    let days = Math.floor((date - firstDay) / (24 * 60 * 60 * 1000));
         
    return Math.ceil(days / 7);
};
