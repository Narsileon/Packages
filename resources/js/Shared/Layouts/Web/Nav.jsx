import { useToggle } from "react-use";
import { usePage } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import MenuButton from "@/Components/Elements/Buttons/MenuButton";
import NavLink from "@/Components/Elements/Links/NavLink";

export default function Nav() {
    const auth = usePage().props.auth;

    const commonLinks = [
        { route: route('home'), label: trans('Home') },
    ];

    const [open, setOpen] = useToggle(false);
    const [open2, setOpen2] = useToggle(false);

    return (
        <nav className="flex items-center">
            <MenuButton
                className="md:hidden"
                onClick={ setOpen }
            />

            <ul className={ `md:flex md:space-x-4 ${ open ? "absolute primary-background w-full h-screen top-0 left-0 z-40" : "hidden" }` }>
                <NavLink
                    href={ route('home') }
                    label="Home"
                    icon="home"
                />

                <li className="relative">
                    <MenuButton
                        className="hidden md:block"
                        onClick={ setOpen2 }
                    />

                    <ul className={ `${ !open && open2 ? "absolute primary-background border-2 border-color mt-2 p-2 space-y-2 right-0 z-40 rounded" : "md:hidden" }` }>
                        { auth ? <NavAuth /> : <NavGuest /> }
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

const NavAuth = () => {
    return (
        <>
            <NavLink
                href={ route('backoffice.dashboard') }
                label="Dashboard"
                icon="dashboard"
                type="link"
            />
            <NavLink
                href={ route('logout') }
                label="Log out"
                icon="logout"
                type="link"
                method="post"
                as="button"
            />
        </>
    );
}

const NavGuest = () => {
    return (
        <>
            <NavLink
                href={ route('register') }
                label="Register"
                icon="register"
            />
            <NavLink
                href={ route('login') }
                label="Log in"
                icon="login"
            />
        </>
    )
}