import { trans } from "@/narsil-localization";
import { useToggle } from "react-use";
import { addMonths, days, months, useCalendar } from "@/Components/Calendars/pia-calendar"
import Chevron from "@/Shared/Svg/Chevron";
import DatePickerCell from "./DatePickerCell";
import Icon from "@/Shared/Svg/Icon";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Datepicker({ setExternalDate, getExternalDate }) {
    const today = new Date();

    const [date, setDate, dates] = useCalendar();

    const [show, toggle] = useToggle(false);

    const renderRows = () => {
        let rows = [];

        for (let i = 0; i < Object.keys(dates).length; i++) {
            rows.push(
                <tr key={ Object.keys(dates)[i] }>
                    {
                        dates[Object.keys(dates)[i]].map((d) => {
                            return (
                                <DatePickerCell
                                    label={ d.getDate() }
                                    action={ () => {
                                        setDate(d);
                                        setExternalDate(d);
                                    }}
                                    current={ date.getMonth() == d.getMonth() }
                                    active={
                                        d.getFullYear() == today.getFullYear() &&
                                        d.getMonth() == today.getMonth() &&
                                        d.getDate() == today.getDate()
                                    }
                                    key={ d }
                                />
                            );
                        })
                    }
                </tr>
            );
        }

        return rows;
    };

    return (
        <div>
            <button
                className="p-2"
                onClick={ () => {
                    toggle();
                    setDate(getExternalDate);
                }}
            >
                <Icon name="calendar" />
            </button>

            {
                !show ? null :

                <div className="absolute primary-background border-2 border-color w-fit h-fit z-10">
                    <div className="text-sm p-1 rounded">
                        <div className="flex items-center justify-between p-2">
                            <div className="text-left font-bold">
                                {
                                    trans(`date-time.months.${ months[date.getMonth()] }`) + " " + date.getFullYear()
                                }
                            </div>
                            <div className="flex space-x-3">
                                <PrimaryButton onClick={ () => setDate(addMonths(date, -1)) }>
                                    <Chevron direction="left" className="w-3 h-3" />
                                </PrimaryButton>
                                <PrimaryButton onClick={ () => setDate(addMonths(date, 1)) }>
                                    <Chevron direction="right" className="w-3 h-3" />
                                </PrimaryButton>
                            </div>
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        {
                                            days.map((label, index) => {
                                                return (
                                                    <th
                                                        className="p-3"
                                                        key={ index }
                                                    >
                                                        <span className="flex items-center justify-center w-3 aspect-square rounded-full">
                                                            { trans(`date-time.days.${ label }`).slice(0, 2) }
                                                        </span>
                                                    </th>
                                                );
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    { renderRows() }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
