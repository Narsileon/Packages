import { t } from "@/narsil-localization";
import { days } from "@/Components/Calendars/narsil-calendar"
import CalendarCell from "@/Components/Calendars/CalendarCell";

export default function CalendarDayTable({ date, activeMonth, setDate }) {
    const today = new Date();

    const renderRows = () => {
        let rows = [];

        for (let i = 0; i < 24; i ++) {
            rows.push(
                <tr 
                    className="w-auto h-24 divide-x divided"
                    key={ i }
                >
                    <td className="flex items-start justify-center m-2 text-center">
                        { i }                       
                    </td>
                    <CalendarCell 
                        action={ () => { setDate(date) }}
                        current={ activeMonth == date.getMonth() } 
                        active={ 
                            date.getFullYear() == today.getFullYear() && 
                            date.getMonth() == today.getMonth() && 
                            date.getDate() == today.getDate() 
                        }
                        key={ date }
                    />
                </tr>
            );
        }

        return rows;
    };

    return (
        <table className="table-fixed col-grow w-full mt-2">
            <thead className="border-2 bordered h-12">
                <tr className="divide-x divided">
                    <th className="w-12">
                        #
                    </th>
                    <th  className="p-2">
                        <div className="text-left">
                            { date.getDate() }
                        </div>
                        <div className="text-left">
                            { t(`time.${ days[date.getDay()] }`) }                                   
                        </div>
                    </th>  
                </tr>
            </thead>
            <tbody className="border-2 bordered divide-y divided">
                { renderRows() }
            </tbody>
        </table>
    );
}
