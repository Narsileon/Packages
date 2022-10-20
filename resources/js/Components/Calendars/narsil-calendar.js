import { useEffect, useState } from "react";

function getWeekNumber(date) {
    let firstDay = new Date(date.getFullYear(), 0, 1);

    let days = Math.floor((date - firstDay) / (24 * 60 * 60 * 1000));
         
    return Math.ceil(days / 7);
}

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
    const [dates, setDates] = useState(get());
    const [activeWeek, setActiveWeek] = useState(getWeekNumber(date));

    useEffect(() => {
        setDates(get);
        setActiveWeek(getWeekNumber(date))
    }, [date])

    function addDays(event, value) {
        event.preventDefault();

        setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + value))
    }

    function addMonths(event, value) {
        event.preventDefault();
        
        setDate(new Date(date.getFullYear(), date.getMonth() + value, date.getDate()))
    }

    function addYears(event, value) {
        event.preventDefault();

        setDate(new Date(date.getFullYear() + value, date.getMonth(), date.getDate()))
    }

    function get() {
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
    };

    return[ dates, setDate, date, activeWeek, addMonths, addDays ]
}

