export default function FormHeader({ children, ...props }) {
    return (
        <section id="form-header">
            <div { ...props }>
                { children }
            </div>
        </section>
    );
}
