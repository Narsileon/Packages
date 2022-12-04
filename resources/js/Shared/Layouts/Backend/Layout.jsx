import { useToggle } from "react-use";
import CloseButton from "@/Components/Elements/Buttons/CloseButton";
import Flash from "@/Shared/Flash";
import LocaleDropdown from "@/Shared/Layouts/LocaleDropdown";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import Icon from "@/Shared/Svg/Icon";
import Nav from "./Nav";

export default function Layout({ children }) {
    const [visible, setVisible] = useToggle(false);

    return (
        <main className="flex flex-row min-h-screen max-w-screen">
            <aside
                className={`
                    md:relative primary-background top-0 h-screen md:w-10 md:hover:min-w-fit p-1 space-y-4 overflow-hidden hover:z-50
                    md:transition-all md:duration-300
                    ${ visible ? 'absolute w-full z-50' : 'w-10' }
                `}
                onClick={ () => !visible ? setVisible(true) : null }
            >
                <div>
                    <WebsiteLogo />
                    {
                        visible ? (
                            <CloseButton
                                className="absolute primary-background top-2 right-2 w-6 h-6 md:hidden"
                                onClick={ () => setVisible(false) }
                            />
                        ) : null
                    }
                </div>

                <Nav />
            </aside>

            <section className="flex flex-col max-h-screen w-full min-w-0">
                <Header />

                <div className="min-h-0 m-4">
                    { children }
                </div>
            </section>

            <section id="flash_message">
                <Flash />
            </section>
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
                    <Icon name="menu" />
                </button>
            </div>
        </header>
    )
}
