import { Link, usePage } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";

export default function MenuLink({
	menuItem,
	className="",
    ...props
}) {
    const shared = usePage().props.shared;

    const active = menuItem.url == shared.ziggy.location;
    const permissions = shared.auth?.permissions ?? [];

	return (
        !menuItem.permissions || menuItem.permissions.length == 0 || menuItem.permissions.some((x) => permissions.includes(x.name)) ? (
            <li>
                <div className="selectable flex items-center p-1 space-x-2">
                    {
                        menuItem.icon ? (
                            <Icon name={ menuItem.icon } />
                        )  : null
                    }
                    {
                        menuItem.type == 'page' ? (
                            <Link
                                className={ `selectable ${ className } ${ active ? "selectable-active" : ""}` }
                                href={ route(menuItem.url) }
                                { ...props }
                            >
                                { menuItem.label && upperFirst(transChoice(menuItem.label, 2)) }
                            </Link>
                        ) : (
                            <a
                                className={ `selectable ${ className }` }
                                href={ menuItem.url }
                                target="_blank"
                                { ...props }
                            >
                                { menuItem.label && upperFirst(transChoice(menuItem.label, 2)) }
                            </a>
                        )
                    }
                </div>
            </li>
        ) : null
	);
}
