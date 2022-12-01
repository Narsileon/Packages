import { useToggle } from "react-use";
import { usePage } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import NavLink from "@/Components/Elements/Links/NavLink";
import Chevron from "@/Shared/Svg/Chevron";
import Icon from "@/Shared/Svg/Icon";

export default function Nav() {
    const menu = usePage().props.shared.settings.menus.backend;

    function renderLinks(menuItems) {
        return (
            menuItems.map((menuItem, index) => {
                return (
                    menuItem.type == 'category' ? (
                        <Section
                            label={ transChoice(menuItem.label) }
                            icon={ menuItem.icon }
                            key={ index }
                        >
                            {
                                renderLinks(menuItem.children)
                            }
                        </Section>
                    ) : (
                        <NavLink
                            href={ route(menuItem.url) }
                            label={ transChoice(menuItem.label) }
                            icon={ menuItem.icon }
                            key={ index }
                        />
                    )
                )
            })
        )
    }

    return (
        <nav className="font-semibold">
            <ul>
                {
                    renderLinks(menu)
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
                    <Icon
                        name={ icon }
                        className="w-6 h-6"
                    />
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
