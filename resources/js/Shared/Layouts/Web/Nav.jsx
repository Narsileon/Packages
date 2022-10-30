import { usePage } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Dropdown, DropdownItem, DropdownPanel } from "@/Components/Elements/Dropdowns";
import NavLink from "@/Components/Elements/Links/NavLink";

export default function Nav() {
    const auth = usePage().props.auth;

    return (
        <nav>
            <ul className="flex items-center space-x-2">
                <NavLink
                    href={ route('home') }
                    label="Home"
                />

                { auth ? <NavAuth /> : <NavGuest /> }
            </ul>
        </nav>
    );
}

const NavAuth = () => {
    return (
        <>
            <Dropdown trigger={ t('Menu') }>
                <DropdownPanel className="right-0">
                    <div>
                        <DropdownItem
                            href={ route('backoffice.dashboard') }
                            label="Dashboard"
                            type="link"
                        />
                    </div>
                    <div>
                        <DropdownItem
                            href={ route('logout') }
                            label="Log out"
                            type="link"
                            method="post"
                            as="button"
                        />
                    </div>
                </DropdownPanel>
            </Dropdown>
        </>
    );
}

const NavGuest = () => {
    return (
        <>
            <NavLink
                href={ route('register') }
                label="Register"
            />
            <NavLink
                href={ route('login') }
                label="Log in"
            />
        </>
    )
}