import Nav from "./Nav";
import LocaleDropdown from "@/Shared/Layouts/LocaleDropdown";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import ThemeButton from "@/Shared/Layouts/ThemeButton";

export default function Header () {
    return (
        <header id="header" className="flex justify-between primary-background border-b-2 border-color p-4">
            <div id="left-header" className="flex items-center space-x-4">
                <WebsiteLogo />
                <ThemeButton />
            </div>

            <div id="right-header" className="flex items-center space-x-4">
                <LocaleDropdown />
                <Nav />
            </div>
        </header>
    );
}