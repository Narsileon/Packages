import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import { t } from "@/localization";
import Chevron from "@/Shared/Svg/Chevron";
import Icon from "@/Shared/Svg/Icon";
import { useToggle } from "react-use";
import { days, months } from "../useCalendar"
import DatePickerCell from "./DatePickerCell";

export default function Datepicker({ dates, activeDate, setDate, addMonths }) {
    const today = new Date();

    const [show, toggle] = useToggle(false);

    const renderRows = () => {
        let rows = [];

        for (let i = 0; i < Object.keys(dates).length; i++) {
            rows.push(
                <tr key={ Object.keys(dates)[i] }>
                    {
                        dates[Object.keys(dates)[i]].map((date) => {
                            return (
                                <DatePickerCell 
                                    label={ date.getDate() } 
                                    action={ () => setDate(date) }
                                    current={ activeDate.getMonth() == date.getMonth() } 
                                    active={ 
                                        date.getFullYear() == today.getFullYear() && 
                                        date.getMonth() == today.getMonth() && 
                                        date.getDate() == today.getDate() 
                                    }
                                    key={ date }
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
                onClick={ toggle }
            >
                <Icon name="calendar" />
            </button>

            {
                !show ? null :

                <div className="absolute primary-background bordered w-fit h-fit z-10">
                    <div className="text-sm p-1 rounded">
                        <div className="flex items-center justify-between p-2">
                            <div className="text-left font-bold">
                                {
                                    (t(months[activeDate.getMonth()]) + " " + activeDate.getFullYear())
                                }
                            </div>
                            <div className="flex space-x-3">
                                <PrimaryButton action={ (event) => addMonths(event, -1) }>
                                    <Chevron direction="left" />
                                </PrimaryButton>
                                <PrimaryButton action={ (event) => addMonths(event, 1) }>
                                    <Chevron direction="right" />
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
                                                        key={index}
                                                    >
                                                        <span className="flex items-center justify-center w-3 aspect-square rounded-full">
                                                            { (t(label)).slice(0, 2) }                                 
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