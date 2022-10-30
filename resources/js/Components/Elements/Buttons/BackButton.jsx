import { t } from "@/narsil-localization";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function BackButton({ ...props }) {
	const previousLocation = usePage().props.ziggy.previousLocation;

    return (
        <Link
            href={ previousLocation !== "" ? previousLocation : "#" }
            { ...props }
        >
            { t('Back') }
        </Link>
    );
}