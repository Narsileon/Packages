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
            className={ `relative primary-background border-2 border-color m-4 p-8 w-full space-y-8 rounded-xl ${ className }` }
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
