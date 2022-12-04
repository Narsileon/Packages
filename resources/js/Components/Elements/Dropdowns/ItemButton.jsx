import { upperFirst } from "lodash";

export default function DropdownButton({
    label,
    children,
    ...props
}) {
    children = label != null ? upperFirst(label) : children;

    return (
        <li className="selectable p-1">
            <button
                { ...props }
            >
                { children }
            </button>
        </li>
    );
}
