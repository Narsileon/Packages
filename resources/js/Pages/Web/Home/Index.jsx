import { Head } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";

export default function Index() {
    return (
        <>
            <Head title={ t('common.home') } />
        </>
    );
}
