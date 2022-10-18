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
				className="primary-element flex items-center"
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
