import { Head } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Calendar from "@/Components/Calendars/Calendar";

export default function Index() {
    return (
        <>
            <Head title={ t('date-time.calendar') } />

			<Calendar />
        </>
    );
}
