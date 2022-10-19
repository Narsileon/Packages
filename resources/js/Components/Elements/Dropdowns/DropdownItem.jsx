import { Link } from "@inertiajs/inertia-react";

export default function DropdownItem({ 
    label,
    ...props
}) {
    return (
        <li className="selectable-item m-1">
            <Link 
                { ...props }
            >
                { label }
            </Link>
        </li>
    );
}
