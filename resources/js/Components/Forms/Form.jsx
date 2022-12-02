export default function Form({
    children,
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
            className={ `primary-background border-2 border-color p-8 h-full w-full space-y-8 rounded-xl overflow-y-auto ${ className }` }
            onSubmit={ onSubmit }
            { ...props }
        >
            { children }
        </form>
    );
}
