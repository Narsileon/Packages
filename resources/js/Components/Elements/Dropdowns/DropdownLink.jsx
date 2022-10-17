import { Link } from "@inertiajs/inertia-react";

export default function DropdownItem({ 
    label,
    ...props
}) {
    return (
        <li>
            <Link 
                { ...props }
            >
                { label }
            </Link>
        </li>
    );
}
