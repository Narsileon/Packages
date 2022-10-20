import { Link } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { upperFirst } from "lodash";

export default function PrimaryButton({
    label,
    processing,
    type="button",
    children,
    ...props
}) {
    children = label != null ? upperFirst(t(label)) : children;

    switch (type) {
        case "button":
            return (
                <button
                    className="primary-button"
                    disabled={ processing }
                    { ...props }
                >
                    { label != null ? upperFirst(t(label)) : children }
                </button>
            );
        case "link":
            return (
                <Link
                    className="primary-button"
                    onClick={ (e) => e.preventDefault }
                    { ...props }
                >
                    { label != null ? t(label) : children }
                </Link>
            )
        default:
            break;
    }
}