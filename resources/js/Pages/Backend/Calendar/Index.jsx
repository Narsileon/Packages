import { transChoice } from "@/narsil-localization";
import Calendar from "@/Components/Calendars/Calendar";
import AppHead from "@/Shared/AppHead";

export default function Index() {
    return (
        <>
            <AppHead title={ transChoice('date-time.calendars', 1) } />

			<Calendar />
        </>
    );
}
