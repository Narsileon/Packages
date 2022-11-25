import { Head } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";
import Calendar from "@/Components/Calendars/Calendar";

export default function Index() {
    return (
        <>
            <Head title={ transChoice('date-time.calendars', 1) } />

			<Calendar />
        </>
    );
}
