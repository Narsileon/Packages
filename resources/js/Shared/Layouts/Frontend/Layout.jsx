import Flash from "@/Shared/Flash";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <main className="flex flex-col min-h-screen w-full min-w-fit">
            <section id="header">
                <Header />
            </section>

            <section
                id="content"
                className="flex-grow w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-4"
            >
                { children }
            </section>

            <section id="flash_message">
                <Flash />
            </section>

            <section id="footer">
                <Footer />
            </section>
        </main>
    );
}
