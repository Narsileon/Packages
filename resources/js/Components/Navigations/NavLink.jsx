import { Link, usePage } from "@inertiajs/inertia-react";
import { t } from "@/localization";

export default function NavLink({ 
	label,
	href, 
    ...props
}) {
	const active = href == usePage().props.ziggy.location ? true : false;

	return (
		<li>
			<Link
				href={ href }
				className={ `selectable ${ active ? "selectable-active" : ""}` }
                { ...props }
			>
				{ t(label) }
			</Link>			
		</li>
	);
}
