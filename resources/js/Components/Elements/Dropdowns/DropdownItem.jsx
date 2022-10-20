import { Link } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { upperFirst } from "lodash";

export default function DropdownItem({ 
    label,
    type="button",
    children,
    ...props
}) {
    children = label != null ? upperFirst(t(label)) : children

    switch (type) {
        case "button":
            return (
                <li className="selectable-item m-1">
                    <button 
                        { ...props }
                    >
                        { children }
                    </button>
                </li>
            );
        case "link":
            return (
                <li className="selectable-item m-1">
                    <Link 
                        { ...props }
                    >
                        { children }
                    </Link>
                </li>
            )
        default:
            break;
    }
}
