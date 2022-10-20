import { t } from "@/narsil-localization";
import { upperFirst } from "lodash";
import NavLink from "@/Components/Elements/Links/NavLink";
import Icon from "@/Shared/Svg/Icon";

export default function Nav() {
    return (
        <nav>
            <ul className="space-y-4">
                <SidebarLink
                    href={ route("backoffice.dashboard") }
                    icon="dashboard"
                    label="Dashboard"
                />
                <SidebarLink
                    href={ route("backoffice.calendar") }
                    icon="calendar"
                    label="calendar"
                />
                <SidebarLink
                    href={ route("backoffice.users.index") }
                    icon="user"
                    label="Users"
                />
                <SidebarLink
                    href={ route("backoffice.roles.index") }
                    icon="shield"
                    label="roles"
                />
            </ul>
        </nav>
    );
}

const SidebarLink = ({ href, icon, label }) => {
    return (
        <NavLink
            className="flex items-center"
            href={ href }
        >
            <div className="px-1">
                <Icon name={ icon } className="w-6 h-6" />
            </div>
            
            <span className="flex-1 whitespace-nowrap ml-2">
                { upperFirst(t(label)) }
            </span>
        </NavLink>
    );
}