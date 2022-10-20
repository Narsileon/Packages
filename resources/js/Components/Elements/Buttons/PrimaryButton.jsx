import { Link } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { upperFirst } from "lodash";

export default function PrimaryButton({
    label,
    type="submit",
    processing,
    children,
    ...props
}) {
    if (type == "submit") {
        return (
            <button
                className="primary-button"
                disabled={ processing }
                { ...props }
            >
                { label != null ? upperFirst(t(label)) : children }
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
                { label != null ? t(label) : children }
            </Link>
        );
    }
}