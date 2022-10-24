import { Link } from "@inertiajs/inertia-react";
import Nav from "./Nav";
import LocaleDropdown from "@/Shared/Layouts/LocaleDropdown";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import Logo from "@/Shared/Svg/Logo";
import Flash from "@/Shared/Flash";

export default function Layout({ children }) {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />

            <section className="flex-grow w-9/12 mx-auto my-4">
                { children }
            </section>

            <Flash />

            <Footer />
        </main>
    );
}

const Header = () => {
    return (
        <header className=" flex justify-between primary-background p-4 border-b-2 bordered">
            <WebsiteLogo />

            <div className="flex items-center space-x-4">
                <LocaleDropdown />
                <Nav />
                <ThemeButton />                   
            </div>
        </header>        
    )
}

const Footer = () => {
    // Data: links
    const links = [];

    // Data: icons
    const icons = [
        { route: '#', name: "github" },
        { route: '#', name: "facebook" },
        { route: '#', name: "instagram" },
        { route: '#', name: "twitter" },
    ];

    return (
        <footer className="primary-background w-full p-4 border-t-2 bordered text-sm">
            {/* First line */}
            <div className="flex items-center justify-between">
                <WebsiteLogo />

                {/* Links */}
                <div className="flex items-center space-x-4">
                    {
                        links.map(({ route, label }, index) => {
                            return (
                                <Link 
                                    className="link-text"
                                    href={ route } 
                                    key={ index }
                                >
                                    { t(label) }
                                </Link>
                            );
                        })
                    }
                </div>
            </div>

            <hr className="my-4 bordered" />

            <div className="flex items-center justify-between">
                <span>
                    © 2022 <Link href={route('home')} className="link-text">Narsil Studio™</Link>. All Rights Reserved.
                </span>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    {
                        icons.map(({ route, name }) => {
                            return (
                                <Link 
                                    className="link-icon"
                                    href={ route } 
                                    key={ name }
                                >
                                    <Logo name={ name } />
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </footer>         
    ) 
}
