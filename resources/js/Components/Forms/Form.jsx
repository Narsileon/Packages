export default function Form({ header, children, footer, ...props }) {
    return (
        <div className="primary-background bordered mt-4 p-8 space-y-4 rounded-xl">
            <form 
                { ...props }
            >
                { header }
                { children }
                { footer }
            </form>
        </div>
    );
}
