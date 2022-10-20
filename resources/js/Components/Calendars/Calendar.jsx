import { useState } from "react";
import { months } from "./useCalendar"
import { useMonth } from "./useMonth";
import CalendarDayTable from "./CalendarDayTable";
import CalendarMonthTable from "./CalendarMonthTable";
import CalendarWeekTable from "./CalendarWeekTable";
import Datepicker from "./DatePicker/DatePicker";
import PrimaryButton from "../Elements/Buttons/PrimaryButton";
import { t } from "@/localization";
import Chevron from "@/Shared/Svg/Chevron";

export default function Calendar({ tasks }) {

    const [ dates, setDate, activeDate, activeWeek, addMonths, addDays ] = useMonth();

    const [ show, setShow ] = useState("month");

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
                        <Datepicker 
                            dates={ dates }
                            activeDate={ activeDate } 
                            setDate={ setDate } 
                            addMonths={ addMonths } 
                        />
                        <div className="flex space-x-2">
                            <PrimaryButton
                                label="Month"
                                onClick={ () => setShow("month") }
                            />
                            <PrimaryButton
                                label="Week"
                                onClick={ () => setShow("week") }
                            />
                            <PrimaryButton
                                label="Day"
                                onClick={ () => setShow("day") }
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button 
                                className="primary-button"
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
                                <Chevron direction="left" />
                            </button>
                            <button
                                className="primary-button"
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
                                <Chevron direction="right" />
                            </button>
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
