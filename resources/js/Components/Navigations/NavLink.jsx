import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ 
	label, 
	active, 
    ...props
}) {
	return (
		<li>
			<Link
				className={
					"selectable"
					+ (active ? ' selectable-active' : "")
				}
                { ...props }
			>
				{ label }
			</Link>			
		</li>
	);
}
