import { FormError, FormLabel } from "@/Components/Forms";

export default function FormTextArea({ 
    label,
    error,
    setData,
    className="",
    ...props 
}) {
	const onChange = (event) => {
        setData(event.target.id, event.target.value);
    };

    return (
        <div>
            <FormLabel label={ label } />
            <textarea 
                className={ `field ${className}` }
                onChange={ onChange }
                required={ true }
                { ...props }
            /> 
            <FormError message={ error } />
        </div>   
    );
}
