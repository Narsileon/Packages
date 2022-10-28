import Flash from "@/Shared/Flash";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    const footerTextLinks = [];

    const footerIconLinks = [
        { route: '#', name: "github" },
        { route: '#', name: "facebook" },
        { route: '#', name: "instagram" },
        { route: '#', name: "twitter" },
    ];

    return (
        <main className="flex flex-col min-h-screen w-screen min-w-fit">
            <Header />

            <section className="flex-grow w-full mx-auto my-4 lg:w-9/12">
                { children }
            </section>

            <Flash />

            <Footer
                textLinks={ footerTextLinks }
                iconLinks={ footerIconLinks }
            />
        </main>
    );
}
