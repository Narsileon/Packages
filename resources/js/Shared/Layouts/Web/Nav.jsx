import { usePage } from "@inertiajs/inertia-react";
import NavLink from "@/Components/Elements/Links/NavLink";
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

                { auth ? <NavAuth /> : <NavGuest /> }
            </ul>
        </nav> 
    );
}

const NavAuth = () => {
    return (
        <>
            <Dropdown 
                childrenClasses="right-0"
                trigger="Menu"
            >
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