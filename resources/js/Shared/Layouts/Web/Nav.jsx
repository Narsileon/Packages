import { usePage } from "@inertiajs/inertia-react";
import NavLink from "@/Components/Navigations/NavLink";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";

export default function Nav() {
    const auth = usePage().props.auth;

    return (
        <nav>
            <ul className="flex space-x-2">
                <NavLink
                    href={ route('home') } 
                    label="Home"                     
                />

                {
                    auth ? 
                    (
                        <>
                            <Dropdown trigger="aaa">
                                <NavLink 
                                    href={ route('backoffice.dashboard') } 
                                    label="Dashboard"
                                />
                                <NavLink 
                                    href={ route('logout') } 
                                    label="Log out"
                                    method="post"
                                    as="button"
                                />
                            </Dropdown>
                        </>
                    ) 
                    :
                    (
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
            </ul>
        </nav> 
    );
}