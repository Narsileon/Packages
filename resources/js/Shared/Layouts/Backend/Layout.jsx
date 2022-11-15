import Nav from "./Nav";
import LocaleDropdown from "@/Shared/Layouts/LocaleDropdown";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import Flash from "@/Shared/Flash";
import Icon from "@/Shared/Svg/Icon";

export default function Layout({ children }) {
    return (
        <main className="flex max-h-screen max-w-screen">
            <aside className="flex-none
                sticky overflow-hidden primary-background top-0 h-screen w-10 p-1 z-50 space-y-4
                hover:absolute md:hover:sticky hover:w-64 hover:overflow-visible
                md:transition-all md:duration-300
            ">
                <WebsiteLogo />

                <Nav />
            </aside>

            <section className="flex flex-col max-h-screen w-full min-w-0">
                <Header />

                <div className="min-h-0 m-4">
                    { children }
                </div>
            </section>

            <Flash />
        </main>
    );
}

const Header = () => {
    return (
        <header className="w-full h-10 primary-background">
            <div className="flex items-center justify-end mx-2">
                <LocaleDropdown />

                <ThemeButton />

                <button>
                    <Icon
                        className="w-6 h-6"
                        name="menu"
                    />
                </button>
            </div>
        </header>
    )
}
