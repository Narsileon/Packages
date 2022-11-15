import { useClickAway, useToggle } from "react-use";
import { usePage } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import CloseButton from "@/Components/Elements/Buttons/CloseButton";
import MenuButton from "@/Components/Elements/Buttons/MenuButton";
import NavLink from "@/Components/Elements/Links/NavLink";
import { useRef } from "react";

export default function Nav() {
    const auth = usePage().props.auth;

    const links = [
        { route: route('home'), label: trans('common.home'), icon: 'home' },
    ];

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
                { renderLinks(links) }

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
                        { auth ? <NavAuth /> : <NavGuest /> }
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
                links.map(({ route, label, icon }) => {
                    return (
                        <NavLink
                            href={ route }
                            label={ label }
                            icon={ icon }
                            key={ label }
                        />
                    );
                })
            }
        </>
    );
}

const NavAuth = () => {
    const links = [
        { route: route('admin.dashboard'), label: trans('common.dashboard'), icon: 'dashboard' },
    ];

    return (
        <>
            <div>
                { renderLinks(links) }
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
        { route: route('register'), label: trans('common.register'), icon: 'register' },
        { route: route('login'), label: trans('common.login'), icon: 'login' },
    ];

    return (
        <>
            { renderLinks(links) }
        </>
    )
}