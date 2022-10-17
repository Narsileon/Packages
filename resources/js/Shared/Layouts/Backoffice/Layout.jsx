import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <main className="flex min-h-screen">
            <Nav />

            <section className="w-10/12 m-4">
                { children }
            </section>
        </main>
    );
}
