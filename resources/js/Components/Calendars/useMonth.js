import { useEffect, useState } from "react";
import { useWeekNumber } from "./useCalendar";

export const useMonth = () => {
    const [date, setDate] = useState(new Date());
    const [dates, setDates] = useState(get());
    const [activeWeek, setActiveWeek] = useState(useWeekNumber(date));

    useEffect(() => {
        setDates(get);
        setActiveWeek(useWeekNumber(date))
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

        let firstWeek = useWeekNumber(new Date(date.getFullYear(), date.getMonth(), 1));
        let lastWeek = useWeekNumber(new Date(date.getFullYear(), date.getMonth() + 1, 0));

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
