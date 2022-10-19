import { Link } from "@inertiajs/inertia-react";
import { t } from "@/localization";

export default function PrimaryButton({
    label,
    type="submit",
    processing,
    ...props
}) {
    if (type == "submit") {
        return (
            <button
                className="primary-button"
                disabled={ processing }
                { ...props }
            >
                { t(label) }
            </button>
        );
    }

    if (type == "link") {
        return (
            <Link
                className="primary-button"
                method="get"
                onClick={ (e) => e.preventDefault }
                { ...props }
            >
                { t(label) }
            </Link>
        );
    }
}