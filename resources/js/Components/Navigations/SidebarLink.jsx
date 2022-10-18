import { Link } from "@inertiajs/inertia-react";

export default function SidebarLink({ 
	label, 
    icon,
	active, 
    ...props
}) {
	return (
		<li>
			<Link
				className="selectable flex items-center"
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
