import { useRef } from "react";
import { useClickAway, useToggle } from "react-use";
import { usePage } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";
import CloseButton from "@/Components/Elements/Buttons/CloseButton";
import MenuButton from "@/Components/Elements/Buttons/MenuButton";
import NavLink from "@/Components/Elements/Links/NavLink";

export default function Nav() {
    const shared = usePage().props.shared;

    const auth = shared.auth;
    const menuLinks = shared.settings.menus.frontend_header

    const dropdown = useRef();

    const [open, setOpen] = useToggle(false);

    useClickAway(dropdown, function() {
        if (open) {
            setOpen(false)
        }
    }, ['mouseup']);

    return (
        <nav className="flex items-center font-semibold">
            <MenuButton
                className="md:hidden"
                onClick={ setOpen }
            />

            <ul className={ `md:flex md:items-center md:justify-between primary-background p-2 space-y-2 md:space-x-4 ${ open ? "absolute md:relative md:w-auto w-full md:h-12 h-screen top-0 left-0 z-40" : "hidden" }` }>
                { renderLinks(menuLinks) }

                <li className="md:relative grid">
                    <MenuButton
                        className="hidden md:block"
                        onClick={ setOpen }
                    />

                    <CloseButton
                        className="absolute top-4 right-4 w-6 h-6 md:hidden"
                        onClick={ () => setOpen(false) }
                    />

                    <ul
                        className={ `${ open ? "md:absolute relative md:primary-background md:border-2 md:p-2 md:border-color md:top-8 md:right-0 space-y-2 z-40 rounded" : "md:hidden" }` }
                        ref={ dropdown }
                    >
                        { auth ? <NavAuth auth={ auth } /> : <NavGuest /> }
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

const renderLinks = (links) => {
    return (
        <>
            {
                links.map(({ url, label, icon }) => {
                    return (
                        <NavLink
                            href={ url }
                            label={ transChoice(label, 1) }
                            icon={ icon }
                            key={ label }
                        />
                    );
                })
            }
        </>
    );
}

const NavAuth = ({ auth }) => {
    function links() {
        if (auth.permissions.includes('backend-view'))
        {
            return [
                { url: route('admin.dashboard'), label: 'common.dashboard', icon: 'chart' },
            ];
        } else {
            return [];
        }
    }

    return (
        <>
            <div>
                { renderLinks(links()) }
            </div>

            <div>
                <NavLink
                    href={ route('logout') }
                    label="Log out"
                    icon="logout"
                    method="post"
                    as="button"
                />
            </div>
        </>
    );
}

const NavGuest = () => {
    const links = [
        { url: route('register'), label: 'common.register', icon: 'user-plus' },
        { url: route('login'), label: 'common.login', icon: 'identification' },
    ];

    return (
        <>
            { renderLinks(links) }
        </>
    )
}