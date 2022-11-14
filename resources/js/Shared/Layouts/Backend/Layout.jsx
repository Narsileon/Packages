import Nav from "./Nav";
import LocaleDropdown from "@/Shared/Layouts/LocaleDropdown";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import Flash from "@/Shared/Flash";

export default function Layout({ children }) {
    return (
        <main className="flex min-h-screen max-w-screen">
            <aside className="flex-none
                sticky overflow-hidden primary-background top-0 h-screen w-10 p-1 z-50 space-y-4
                hover:absolute md:hover:sticky hover:w-64 hover:overflow-visible
                md:transition-all md:duration-300
            ">
                <Header />

                <Nav />
            </aside>

            <section className="grid grid-cols-1 grow content-start m-4">
                { children }
            </section>

            <Flash />
        </main>
    );
}

const Header = () => {
    return (
        <header className="flex items-center justify-between space-x-2">
            <WebsiteLogo />

            <div className="flex items-center">
                <LocaleDropdown />
                <ThemeButton />
            </div>
        </header>
    )
}
