import { usePage } from "@inertiajs/inertia-react";
import NavLink from "@/Components/Navigations/NavLink";
import ThemeButton from "@/Shared/ThemeButton";
import WebsiteLogo from "@/Shared/WebsiteLogo";

export default function WebLayout({ children }) {
    const auth = usePage().props.auth;

    return (
        <main className="flex flex-col min-h-screen">
            <header className="flex justify-between p-4">
                <div>
                    <WebsiteLogo />
                </div>

                <div className="flex items-center space-x-2">
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

                    <ThemeButton />                   
                </div>
            </header>

            <section className="flex-grow w-9/12 mx-auto my-4">
                { children }
            </section>

            <footer>

            </footer>
        </main>
    );
}