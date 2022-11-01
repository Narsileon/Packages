import { trans, transChoice } from "@/narsil-localization";
import NavLink from "@/Components/Elements/Links/NavLink";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";

export default function Nav() {
    return (
        <nav className="ml-1 font-semibold">
            <ul>
                <NavLink
                    href={ route('backoffice.dashboard') }
                    label={ trans('common.dashboard') }
                    icon="dashboard"
                />

                {/* Management */}
                <li>
                    <Dropdown trigger={
                        <NavLink
                            label={ trans('common.management') }
                            icon="link"
                        />
                    }>
                        <NavLink
                            href={ route('backoffice.users.index') }
                            label={ transChoice('common.users', 2) }
                            icon="user"
                        />
                        <NavLink
                            href={ route('backoffice.roles.index') }
                            label={ transChoice('permissions.roles', 2) }
                            icon="group"
                        />
                    </Dropdown>
                </li>

                {/* Backoffice */}
                <li>
                    <Dropdown trigger={
                        <NavLink
                            label={ trans('common.backoffice') }
                            icon="link"
                        />
                    }>
                        <NavLink
                            href={ route('backoffice.calendar') }
                            label={ trans('date-time.calendar') }
                            icon="calendar"
                        />
                        <NavLink
                            href={ route('backoffice.orders.index') }
                            label={ transChoice('common.orders', 2) }
                            icon="calendar"
                        />
                        <NavLink
                            href={ route('backoffice.orders.index') }
                            label={ transChoice('common.orders', 2) }
                            icon="calendar"
                        />
                    </Dropdown>
                </li>

                {/* Web */}
                <li>
                    <Dropdown trigger={
                        <NavLink
                            label={ trans('common.web') }
                            icon="web"
                        />
                    }>
                        <NavLink
                            href={ route('backoffice.footer_links.index') }
                            label={ transChoice('common.footer_links', 2) }
                        />
                        <NavLink
                            href={ route('backoffice.header_links.index') }
                            label={ transChoice('common.header_links', 2) }
                        />
                        <NavLink
                            href={ route('backoffice.faqs.index') }
                            label={ trans('common.faq') }
                            icon="question"
                        />
                    </Dropdown>
                </li>
            </ul>
        </nav>
    );
}
