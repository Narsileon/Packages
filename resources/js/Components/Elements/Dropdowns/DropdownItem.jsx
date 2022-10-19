import { Link } from "@inertiajs/inertia-react";

export default function DropdownItem({ 
    label,
    ...props
}) {
    return (
        <li className="selectable-item">
            <Link 
                { ...props }
            >
                { label }
            </Link>
        </li>
    );
}
