export default function Form({ 
    header, 
    children, 
    footer, 
    className, 
    ...props 
}) {
    return (
        <form className={`primary-background bordered mt-4 p-8 space-y-8 rounded-xl ${ className }`}
            { ...props }
        >
            { header }

            <div className="space-y-4">
                { children }
            </div>

            { footer }
        </form>
    );
}
