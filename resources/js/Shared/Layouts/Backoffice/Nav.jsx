import { trans, transChoice } from "@/narsil-localization";
import NavLink from "@/Components/Elements/Links/NavLink";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";

export default function Nav() {
    return (
        <nav className="ml-1">
            <ul>
                <NavLink className="p-1"
                    href={ route('backoffice.dashboard') }
                    label={ trans('common.dashboard') }
                    icon="dashboard"
                />
                <NavLink className="p-1"
                    href={ route('backoffice.calendar') }
                    label={ trans('date-time.calendar') }
                    icon="calendar"
                />
                <NavLink className="p-1"
                    href={ route('backoffice.users.index') }
                    label={ transChoice('common.users', 2) }
                    icon="user"
                />
                <NavLink className="p-1"
                    href={ route('backoffice.roles.index') }
                    label={ transChoice('permissions.roles', 2) }
                    icon="group"
                />
                <Dropdown trigger={
                    <NavLink
                        label={ transChoice('common.links', 2) }
                        icon="web"
                    />
                }>
                    <Dropdown trigger={
                        <NavLink
                            label={ transChoice('common.links', 2) }
                            icon="link"
                        />
                    }>
                        <NavLink className="p-1"
                            href={ route('backoffice.footer_links.index') }
                            label={ transChoice('common.footer_links', 2) }
                        />
                        <NavLink className="p-1"
                            href={ route('backoffice.header_links.index') }
                            label={ transChoice('common.header_links', 2) }
                        />
                    </Dropdown>

                    <NavLink className="p-1"
                        href={ route('backoffice.faqs.index') }
                        label={ trans('common.faq') }
                        icon="question"
                    />
                </Dropdown>
            </ul>
        </nav>
    );
}
