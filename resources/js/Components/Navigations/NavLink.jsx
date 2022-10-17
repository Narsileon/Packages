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
					"whitespace-nowrap font-bold text-sm" 
					+ " hover:text-blue-500"
					+ (active ? ' text-blue-500' : "")
				}
                { ...props }
			>
				{ label }
			</Link>			
		</li>
	);
}
