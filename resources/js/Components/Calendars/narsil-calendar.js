import { useEffect, useState } from "react";

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

export const useCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [dates, setDates] = useState(getDates(date));
    const [activeWeek, setActiveWeek] = useState(getWeekNumber(date));

    useEffect(() => {
        setDates(getDates(date));
        setActiveWeek(getWeekNumber(date))
    }, [date])

    return[ date, setDate, dates, activeWeek ]
}

export function addDays(date, value) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + value);
}

export function addMonths(date, value) {
    return new Date(date.getFullYear(), date.getMonth() + value, date.getDate());
}

export function addYears(date, value) {
    return new Date(date.getFullYear() + value, date.getMonth(), date.getDate());
}

function getDates(date) {
    let previousLastDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    let firstDayOfTheMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    let firstWeek = getWeekNumber(new Date(date.getFullYear(), date.getMonth(), 1));
    let lastWeek = getWeekNumber(new Date(date.getFullYear(), date.getMonth() + 1, 0));

    if (firstDayOfTheMonth == 0) {
        firstDayOfTheMonth = 7
    }

    let dates = {};

    for (let i = firstWeek; i <= lastWeek; i++)
    {
        dates[i] = [];
    }

    for (let i = previousLastDate - firstDayOfTheMonth + 2; i <= previousLastDate; i++) {
        dates[firstWeek].push(new Date(date.getFullYear(), date.getMonth() - 1, i));
    }

    let index = 1

    for (let i = 0; i < Object.keys(dates).length; i++) {

        let key = Object.keys(dates)[i]

        for (index; dates[key].length < 7; index++)
        {
            dates[key].push(new Date(date.getFullYear(), date.getMonth(), index));
        }
    }

    return dates;
}

function getWeekNumber(date) {
    let firstDay = new Date(date.getFullYear(), 0, 1);

    let days = Math.floor((date - firstDay) / (24 * 60 * 60 * 1000));
         
    return Math.ceil(days / 7);
}
