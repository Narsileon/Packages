import { useToggle } from "react-use";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import NavLink from "@/Components/Elements/Links/NavLink";
import Icon from "@/Shared/Svg/Icon";

export default function Nav() {
    return (
        <nav className="font-semibold">
            <ul>
                <NavLink
                    href={ route('admin.dashboard') }
                    label={ trans('common.dashboard') }
                    icon="dashboard"
                />

                {/* Management */}
                <Section
                    label={ trans('common.management') }
                    icon="user"
                >
                    <NavLink
                        href={ route('admin.users.index') }
                        label={ transChoice('common.users', 2) }
                        icon="users"
                    />
                    <NavLink
                        href={ route('admin.roles.index') }
                        label={ transChoice('permissions.roles', 2) }
                        icon="group"
                    />
                </Section>

                {/* Backoffice */}
                <Section
                    label={ trans('common.backoffice') }
                    icon="office"
                    visibility={ true }
                >
                    <NavLink
                        href={ route('admin.calendar') }
                        label={ trans('date-time.calendar') }
                        icon="calendar"
                    />
                    <NavLink
                        href={ route('admin.orders.index') }
                        label={ transChoice('common.orders', 2) }
                        icon="clipboard"
                    />
                </Section>

                {/* Web */}
                <Section
                    label={ trans('common.frontoffice') }
                    icon="home"
                >
                    <NavLink
                        href={ route('admin.header_links.index') }
                        label={ transChoice('common.header_links', 2) }
                        icon="link"
                    />
                    <NavLink
                        href={ route('admin.footer_links.index') }
                        label={ transChoice('common.footer_links', 2) }
                        icon="link"
                    />
                    <NavLink
                        href={ route('admin.faqs.index') }
                        label={ trans('common.faq') }
                        icon="question"
                    />
                </Section>

                {/* Localization */}
                <Section
                    label={ transChoice('common.settings', 2) }
                    icon="cog"
                >
                    <NavLink
                        href={ route('admin.languages') }
                        label={ transChoice('common.languages', 2) }
                        icon="language"
                    />
                    <NavLink
                        href={ route('admin.dictionary') }
                        label={ transChoice('common.dictionaries', 1) }
                        icon="book"
                    />
                </Section>
            </ul>
        </nav>
    );
}

const Section = ({
    label,
    icon,
    visibility=false,
    children,
}) => {
    const [show, setShow] = useToggle(visibility);

    return (
        <ul>
            <button
                className="flex items-center selectable p-1 space-x-2"
                onClick={ setShow }
            >
                <Icon
                    name={ icon }
                    className="w-6 h-6"
                />
                <h1>
                    { upperFirst(label) }
                </h1>
            </button>

            <div className="ml-8">
                { show && children }
            </div>
        </ul>
    );
}