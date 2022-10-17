export default function Form({ title, children, ...props }) {
    return (
        <div className="primary-background bordered mt-4 p-8 space-y-4 rounded-xl">
            <h1 className="flex text-xl justify-center font-bold">
                { title }
            </h1>
            <form { ...props }>
                { children }
            </form>
        </div>
    );
}
