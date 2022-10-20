import { Link, usePage } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { upperFirst } from "lodash";

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
                    { upperFirst(t(label)) }
                </span>
			</Link>			
		</li>
	);
}
