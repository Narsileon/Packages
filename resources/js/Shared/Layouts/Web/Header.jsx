import LocaleDropdown from "@/Shared/Layouts/LocaleDropdown";
import Nav from "@/Shared/Layouts/Web/Nav";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";

export default function Header() {
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
    );
}