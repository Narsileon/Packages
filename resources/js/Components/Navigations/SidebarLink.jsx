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
				className={
					"whitespace-nowrap font-bold text-sm" 
					+ " hover:text-blue-500"
					+ (active ? ' text-blue-500' : "")
				}
                { ...props }
			>
                { icon }
                
                <span className="flex-1 whitespace-nowrap ml-3">
                    { label }
                </span>
			</Link>			
		</li>
	);
}
