import { t } from "@/localization";
import { Head } from "@inertiajs/inertia-react";

export default function Index() {
    return (
        <>
            <Head title={ t("Dashboard") } />
        </>
    );
}
