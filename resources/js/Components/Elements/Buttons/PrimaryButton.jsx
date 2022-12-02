import { Link } from "@inertiajs/inertia-react";
import { upperFirst } from "lodash";

export default function PrimaryButton({
    label,
    processing,
    as="button",
    children,
    ...props
}) {
    children = label != null ? upperFirst(label) : children;

    switch (as) {
        case "button":
            return (
                <button
                    className="primary-button whitespace-nowrap"
                    disabled={ processing }
                    { ...props }
                >
                    { children }
                </button>
            );
        case "link":
            return (
                <Link
                    className="primary-button"
                    onClick={ (e) => e.preventDefault }
                    { ...props }
                >
                    { children }
                </Link>
            )
        default:
            break;
    }
}