import Flash from "@/Shared/Flash";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <main className="flex flex-col min-h-screen w-full min-w-fit">
            <Header />

            <section className="flex-grow w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-4">
                { children }
            </section>

            <div className="fixed bottom-4 right-4 rounded">
                <Flash />
            </div>

            <Footer />
        </main>
    );
}
