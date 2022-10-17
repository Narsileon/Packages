import WebsiteLogo from "@/Shared/WebsiteLogo";
import ThemeButton from "@/Shared/ThemeButton";

export default function Layout({ children }) {
    return (
        <main>
            <aside>
                <div className="flex items-center justify-between space-x-2">
                    <WebsiteLogo />

                    <div className="flex items-center">
                        <ThemeButton />
                    </div>
                </div>

                <div className="px-1">
                    <ul className="space-y-4">

                    </ul>
                </div>                
            </aside>

            <section>
                { children }
            </section>
        </main>
    );
}
