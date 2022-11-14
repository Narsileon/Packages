import { Head } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Calendar from "@/Components/Calendars/Calendar";

export default function Index() {
    return (
        <>
            <Head title={ trans('date-time.calendar') } />

			<Calendar />
        </>
    );
}
