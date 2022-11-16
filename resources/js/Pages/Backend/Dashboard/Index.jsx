import { Head } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";

export default function Index() {
    return (
        <>
            <Head title={ trans('common.dashboard') } />
        </>
    );
}
