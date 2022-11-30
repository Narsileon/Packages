import { FormError, FormLabel } from "@/Components/Forms";

export default function FormSelect({
    label,
    error,
    setData,
    children,
    className="",
    ...props
}) {
    const onChange = (event) => {
        setData(event.target.id, event.target.value);
    };

    return (
        <div>
            <FormLabel label={ label } />
            <select
                className={ `field ${ className }` }
                onChange={ onchange }
                required={ true }
                { ...props }
            >
                { children }
            </select>
            <FormError message={ error } />
        </div>
    );
}
