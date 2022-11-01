import { useToggle } from "react-use";
import { usePage } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import MenuButton from "@/Components/Elements/Buttons/MenuButton";
import NavLink from "@/Components/Elements/Links/NavLink";

export default function Nav() {
    const auth = usePage().props.auth;

    const commonLinks = [
        { route: route('home'), label: trans('common.home'), icon: 'home' },
    ];

    const [open, setOpen] = useToggle(false);
    const [open2, setOpen2] = useToggle(false);

    return (
        <nav className="flex items-center font-semibold">
            <MenuButton
                className="md:hidden"
                onClick={ setOpen }
            />

            <ul className={ `md:flex md:space-x-4 ${ open ? "absolute primary-background w-full h-screen top-0 left-0 z-40" : "hidden" }` }>
                { renderLinks(commonLinks) }

                <li className="relative grid">
                    <MenuButton
                        className="hidden md:block"
                        onClick={ setOpen2 }
                    />

                    <ul className={ `${ !open && open2 ? "absolute primary-background border-2 border-color p-2 space-y-2 top-12 right-0 z-40 rounded" : "md:hidden" }` }>
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
        { route: route('backoffice.dashboard'), label: trans('common.dashboard'), icon: 'dashboard' },
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