import { trans } from "@/narsil-localization";
import { Link, usePage } from "@inertiajs/inertia-react";
import { upperFirst } from "lodash";

export default function BackButton({ ...props }) {
	const previousLocation = usePage().props.ziggy.previousLocation;

    return (
        <Link
            href={ previousLocation !== "" ? previousLocation : "#" }
            { ...props }
        >
            { upperFirst(t('common.back')) }
        </Link>
    );
}