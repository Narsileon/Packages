export default function Form({ 
    header, 
    children, 
    footer,
    submit, 
    className="", 
    ...props 
}) {
	const onSubmit = (e) => {
        e.preventDefault();

        submit();
    }

    return (
        <form 
            className={ `primary-background bordered mt-4 p-8 space-y-8 rounded-xl ${ className }` }
            onSubmit={ onSubmit }
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
