import { p, t } from "@/narsil-localization";
import { upperFirst } from "lodash";
import NavLink from "@/Components/Elements/Links/NavLink";
import Icon from "@/Shared/Svg/Icon";

export default function Nav() {
    return (
        <nav>
            <ul>
                <SidebarLink
                    href={ route("backoffice.dashboard") }
                    icon="dashboard"
                    label="Dashboard"
                />
                <SidebarLink
                    href={ route("backoffice.calendar") }
                    icon="calendar"
                    label="date-time.calendar"
                />
                <SidebarLink
                    href={ route("backoffice.users.index") }
                    icon="user"
                    label="Users"
                />
                <SidebarLink
                    href={ route("backoffice.roles.index") }
                    icon="shield"
                    label={ p('permissions.roles', 2) }
                />
            </ul>
        </nav>
    );
}

const SidebarCategory = ({ label, icon }) => {
    return (
        <div className="flex">
            <Icon
                name={ icon }
                className="w-6 h-6"
            />

            <span className="flex ml-3 text-left whitespace-nowrap">
                { upperFirst(t(label)) }
            </span>
        </div>
    );
}

const SidebarLink = ({
    href,
    icon,
    label
}) => {
    return (
        <NavLink
            className="flex items-center p-1"
            href={ href }
        >
            <SidebarCategory
                label= { label }
                icon= { icon }
            />
        </NavLink>
    );
}