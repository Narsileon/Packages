import { useToggle } from "react-use";
import { usePage } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import NavLink from "@/Components/Elements/Links/NavLink";
import Chevron from "@/Shared/Svg/Chevron";
import Icon from "@/Shared/Svg/Icon";

export default function Nav() {
    const shared = usePage().props.shared;

    const links = shared.menus.backendMenu;
    const permissions = shared.auth.permissions;

    function hasPermission(link) {
        return link.permissions.some((x) => permissions.includes(x.name));
    }

    return (
        <nav className="font-semibold">
            <ul>
                {
                    links.map((link, index) => {
                        return (
                            link.data.type == 'category' ? (
                                <Section
                                    label={ transChoice(link.data.label, 2) }
                                    icon={ link.data.icon }
                                    key={ index }
                                >
                                    {
                                        link.data.children.map((link, index) => {
                                            return (
                                                hasPermission(link) ? (
                                                    <NavLink
                                                        href={ route(link.url) }
                                                        label={ transChoice(link.label, 2) }
                                                        icon={ link.icon }
                                                        key={ index }
                                                    />
                                                ) : null
                                            );
                                        })
                                    }
                                </Section>
                            ) : (
                                hasPermission(link.data) ? (
                                    <NavLink
                                        href={ route(link.data.url) }
                                        label={ transChoice(link.data.label, 2) }
                                        icon={ link.data.icon }
                                        key={ index }
                                    />
                                ) : null
                            )
                        )
                    })
                }
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
                className="flex items-center justify-between w-full"
                onClick={ setShow }
            >
                <div className="flex items-center selectable p-1 space-x-2">
                    <Icon name={ icon } />
                    <h1>
                        { upperFirst(label) }
                    </h1>
                </div>
                <div>
                    <Chevron
                        className="w-5 h-5"
                        direction={ show ? 'up' : 'down' }
                    />
                </div>
            </button>

            <div className="ml-8">
                { show ? children : null }
            </div>
        </ul>
    );
}
