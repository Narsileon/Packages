import { usePage } from "@inertiajs/inertia-react";
import NavLink from "@/Components/Navigations/NavLink";

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
                            <NavLink 
                                href={ route('backoffice.dashboard') } 
                                label="Dashboard"
                            />
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