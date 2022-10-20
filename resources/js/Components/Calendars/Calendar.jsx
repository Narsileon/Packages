import { useState } from "react";
import { t } from "@/localization";
import { months, useCalendar } from "@/Components/Calendars/narsil-calendar"
import CalendarDayTable from "@/Components/Calendars/CalendarDayTable";
import CalendarMonthTable from "@/Components/Calendars/CalendarMonthTable";
import CalendarWeekTable from "@/Components/Calendars/CalendarWeekTable";
import Chevron from "@/Shared/Svg/Chevron";
import Datepicker from "@/Components/Calendars/DatePicker/DatePicker";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Calendar({ tasks }) {

    const [ dates, setDate, activeDate, activeWeek, addMonths, addDays ] = useCalendar();

    const [ show, setShow ] = useState("month");

    function getActiveDate() {
        return activeDate;
    }

    return (
        <div className="primary-background bordered flex flex-grow w-full h-fit overflow-auto">
            <div className="flex flex-col w-full p-2">
                <div className="flex items-center justify-between">
                    <div className="text-left font-bold">
                        {
                            (t(months[activeDate.getMonth()]) + " " + activeDate.getFullYear())
                        }
                    </div>
                    <div className="flex space-x-2">
                        <Datepicker setExternalDate={ setDate } getExternalDate={ getActiveDate } />
                        <div className="flex space-x-2">
                            <PrimaryButton
                                label="month"
                                onClick={ () => setShow("month") }
                            />
                            <PrimaryButton
                                label="week"
                                onClick={ () => setShow("week") }
                            />
                            <PrimaryButton
                                label="day"
                                onClick={ () => setShow("day") }
                            />
                        </div>
                        <div className="flex space-x-2">
                            <PrimaryButton 
                                onClick={ 
                                    show == "month" 
                                    ? (event) => addMonths(event, -1) 
                                    : show == "week"
                                    ? (event) => addDays(event, -7) 
                                    : show == "day"
                                    ? (event) => addDays(event, -1) 
                                    : null
                                }
                            >
                                <Chevron direction="left" className="w-6 h-6" />
                            </PrimaryButton>
                            <PrimaryButton
                                onClick={ 
                                    show == "month" 
                                    ? (event) => addMonths(event, 1) 
                                    : show == "week"
                                    ? (event) => addDays(event, 7) 
                                    : show == "day"
                                    ? (event) => addDays(event, 1) 
                                    : null
                                }
                            >
                                <Chevron direction="right" className="w-6 h-6" />
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                {
                    show == "month" ?
                    <CalendarMonthTable 
                        activeMonth={ activeDate.getMonth() } 
                        dates={ dates }  
                        setDate={ setDate } 
                    />
                    : show == "week" ?
                    <CalendarWeekTable 
                        activeMonth={ activeDate.getMonth() } 
                        dates={ dates[activeWeek] } 
                        setDate={ setDate } 
                    />
                    : show == "day" ?
                    <CalendarDayTable 
                        activeMonth={ activeDate.getMonth() } 
                        date={ activeDate } 
                        setDate={ setDate } 
                    />
                    : null
                }
            </div>
        </div>
    );
}
