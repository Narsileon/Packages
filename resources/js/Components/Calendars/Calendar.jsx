import { useState } from "react";
import { trans, transChoice } from "@/narsil-localization";
import { addDays, addMonths, months, useCalendar } from "@/Components/Calendars/pia-calendar"
import CalendarDayTable from "@/Components/Calendars/CalendarDayTable";
import CalendarMonthTable from "@/Components/Calendars/CalendarMonthTable";
import CalendarWeekTable from "@/Components/Calendars/CalendarWeekTable";
import Chevron from "@/Shared/Svg/Chevron";
import Datepicker from "@/Components/Calendars/DatePicker/DatePicker";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Calendar() {
    const [ date, setDate, dates, activeWeek ] = useCalendar();

    const [ show, setShow ] = useState("month");

    function getActiveDate() {
        return date;
    }

    return (
        <section
            id="Calendar"
        >
            <h1 className="text-xl">
                { transChoice('date-time.calendars', 1) }
            </h1>

            <div className="primary-background border-2 border-color flex flex-grow w-full h-fit overflow-auto">
                <div className="flex flex-col w-full p-2">
                    <div className="flex items-center justify-between">
                        <div className="text-left font-bold">
                            {
                                trans(`date-time.months.${ months[date.getMonth()] }`) + " " + date.getFullYear()
                            }
                        </div>
                        <div className="flex space-x-2">
                            <Datepicker setExternalDate={ setDate } getExternalDate={ getActiveDate } />
                            <div className="flex space-x-2">
                                <PrimaryButton
                                    label={ transChoice('date-time.units.months', 1) }
                                    onClick={ () => setShow("month") }
                                />
                                <PrimaryButton
                                    label={ transChoice('date-time.units.weeks', 1) }
                                    onClick={ () => setShow("week") }
                                />
                                <PrimaryButton
                                    label={transChoice('date-time.units.days', 1) }
                                    onClick={ () => setShow("day") }
                                />
                            </div>
                            <div className="flex space-x-2">
                                <PrimaryButton
                                    onClick={ () =>
                                        show == "month"
                                        ? setDate(addMonths(date, -1))
                                        : show == "week"
                                        ? setDate(addDays(date, -7))
                                        : show == "day"
                                        ? setDate(addDays(date, -1))
                                        : null
                                    }
                                >
                                    <Chevron
                                        className="w-6 h-6"
                                        direction="left"
                                    />
                                </PrimaryButton>
                                <PrimaryButton
                                    onClick={ () =>
                                        show == "month"
                                        ? setDate(addMonths(date, 1))
                                        : show == "week"
                                        ? setDate(addDays(date, 7))
                                        : show == "day"
                                        ? setDate(addDays(date, 1))
                                        : null
                                    }
                                >
                                    <Chevron
                                        className="w-6 h-6"
                                        direction="right"
                                    />
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    {
                        show == "month" ?
                        <CalendarMonthTable
                            activeMonth={ date.getMonth() }
                            dates={ dates }
                            setDate={ setDate }
                        />
                        : show == "week" ?
                        <CalendarWeekTable
                            activeMonth={ date.getMonth() }
                            dates={ dates[activeWeek] }
                            setDate={ setDate }
                        />
                        : show == "day" ?
                        <CalendarDayTable
                            activeMonth={ date.getMonth() }
                            date={ date }
                            setDate={ setDate }
                        />
                        : null
                    }
                </div>
            </div>
        </section>
    );
}
