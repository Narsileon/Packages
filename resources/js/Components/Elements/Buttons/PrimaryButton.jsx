import { Link } from "@inertiajs/inertia-react";

export default function PrimaryButton({
    label,
    processing,
    type="button",
    children,
    ...props
}) {
    children = label != null ? label : children;

    switch (type) {
        case "button":
            return (
                <button
                    className="primary-button"
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