import { usePage } from "@inertiajs/inertia-react";
import NavLink from "@/Components/Navigations/NavLink";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import DropdownItem from "@/Components/Elements/Dropdowns/DropdownItem";

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
                            <Dropdown 
                                childrenClasses="right-0"
                                trigger="Menu"
                            >
                                <div>
                                    <DropdownItem 
                                        href={ route('backoffice.dashboard') } 
                                        label="Dashboard"
                                    />                 
                                </div>
                                <div>
                                    <DropdownItem 
                                        href={ route('logout') } 
                                        label="Log out"
                                        method="post"
                                        as="button"
                                    />                                   
                                </div>
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