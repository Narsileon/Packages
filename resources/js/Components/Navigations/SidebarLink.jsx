import { Link, usePage } from "@inertiajs/inertia-react";

export default function SidebarLink({ 
	label, 
    href,
    icon,
    ...props
}) {
    const active = href == usePage().props.ziggy.location ? true : false;

	return (
		<li>
			<Link
                className={ `selectable flex items-center ${ active ? "selectable-active" : ""}` }
                href={ href }
                { ...props }
			>
                <div className="px-1">
                    { icon }
                </div>
                
                <span className="flex-1 whitespace-nowrap ml-2">
                    { label }
                </span>
			</Link>			
		</li>
	);
}
