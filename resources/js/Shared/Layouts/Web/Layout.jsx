import { usePage } from "@inertiajs/inertia-react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    const auth = usePage().props.auth;

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