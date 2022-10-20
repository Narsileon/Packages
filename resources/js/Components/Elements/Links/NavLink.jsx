import { Link, usePage } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { upperFirst } from "lodash";

export default function NavLink({ 
	label,
	className="",
	children,
    ...props
}) {
	const active = props.href ? props.href == usePage().props.ziggy.location ? true : false : false;

	return (
		<li>
			<Link
				className={ `selectable ${ className } ${ active ? "selectable-active" : ""}` }
                { ...props }
			>
				{ label != null ? upperFirst(t(label)) : children }
			</Link>			
		</li>
	);
}
