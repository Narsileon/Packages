import { Link, usePage } from "@inertiajs/inertia-react";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";

export default function NavLink({
	label,
	icon,
	className="",
	children,
    ...props
}) {
	const active = props.href ? props.href == usePage().props.shared.ziggy.location ? true : false : false;

	return (
		<li>
			<div className="selectable flex items-center p-1 space-x-2">
				<Icon
					className="w-6 h-6"
					name={ icon }
				/>
				<Link
					className={ `selectable ${ className } ${ active ? "selectable-active" : ""}` }
					{ ...props }
				>
					{ label ? upperFirst(label) : children }
				</Link>
			</div>
		</li>
	);
}
