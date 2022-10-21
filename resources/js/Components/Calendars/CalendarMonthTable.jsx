import { t } from "@/narsil-localization";
import { days } from "@/Components/Calendars/narsil-calendar"
import CalendarCell from "@/Components/Calendars/CalendarCell";

export default function CalendarMonthTable({ dates, activeMonth, setDate }) {
    const today = new Date();

    const renderRows = () => {
        let rows = [];

        for (let i = 0; i < Object.keys(dates).length; i++) {
            rows.push(
                <tr 
                    className="w-auto h-24 divided-x"
                    key={ Object.keys(dates)[i] }
                >
                    <td className="flex items-start justify-center m-2 text-center">
                        { Object.keys(dates)[i] }                       
                    </td>
                    {
                        dates[Object.keys(dates)[i]].map((date) => {
                            return (
                                <CalendarCell 
                                    label={ date.getDate() } 
                                    action={ () => { setDate(date) }}
                                    current={ activeMonth == date.getMonth() } 
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
        <table className="table-fixed col-grow w-full mt-2">
            <thead className="bordered h-12">
                <tr className="divided-x">
                    <th className="w-12">
                        #
                    </th>
                    {
                        days.map((label, index) => {
                            return (
                                <th 
                                    className="p-2"
                                    key={ index }
                                >
                                    <span>
                                        { t(`time.${ label }`) }                                 
                                    </span>
                                </th>   
                            );                     
                        })
                    }
                </tr>
            </thead>
            <tbody className="bordered divided-y">
                { renderRows() }
            </tbody>
        </table>
    );
}