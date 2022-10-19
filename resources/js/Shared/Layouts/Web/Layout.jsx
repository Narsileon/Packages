import { Link } from "@inertiajs/inertia-react";
import Nav from "./Nav";
import LocaleDropdown from "@/Shared/Layouts/LocaleDropdown";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";

export default function Layout({ children }) {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />

            <section className="flex-grow w-9/12 mx-auto my-4">
                { children }
            </section>

            <Footer />
        </main>
    );
}

const Header = () => {
    return (
        <header className="primary-background border-b-2 border-gray-500 flex justify-between p-2">
            <div className="flex items-center">
                <WebsiteLogo />
            </div>

            <div className="flex items-center space-x-2">
                <LocaleDropdown />
                <Nav />
                <ThemeButton />                   
            </div>
        </header>        
    )
}

const Footer = () => {
    return (
        <footer className="primary-background w-full p-2 border-t-2 border-gray-500 text-sm">
            <div className="flex items-center justify-between p-2">
                <WebsiteLogo />
                <ul className="flex flex-wrap items-center space-x-4">
                    {/* Links (Texts) */}
                </ul>
            </div>
            <hr className="my-2 border-gray-500" />
            <div className="flex items-center justify-between p-2">
                <span>
                    © 2022 <Link href={route('home')} className="hover:underline">Narsil Studio™</Link>. All Rights Reserved.
                </span>
                <div className="flex space-x-4 h-6">
                    {/* Links (Icons) */}
                </div>
            </div>
        </footer>         
    ) 
}
