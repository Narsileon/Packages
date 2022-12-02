export default function FormBody({ children }) {
    return (
        <section id="form-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                { children }
            </div>
        </section>
    );
}
