import { Link } from "@inertiajs/inertia-react";
import { upperFirst } from "lodash";

export default function DropdownLink({
    label,
    children,
    ...props
}) {
    children = label != null ? upperFirst(label) : children;

    return (
        <li className="selectable p-1">
            <Link
                { ...props }
            >
                { children }
            </Link>
        </li>
    );
}
