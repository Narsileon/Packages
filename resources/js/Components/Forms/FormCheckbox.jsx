import { FormError, FormLabel } from "@/Components/Forms";

export default function FormCheckbox({ 
    label,
    error,
    setData,
    submit, 
    className="", 
    ...props 
}) {
	const onChange = (event) => {
        setData(event.target.id, event.target.checked);
    };

    return (
        <div>
            <div className="flex justify-between w-full">
                <FormLabel label={ label }/>
                <input 
                    className={ `field w-min ${className}` }
                    type="text"
                    onChange={ onChange }
                    { ...props }
                />                 
            </div>
            <FormError message={ error }/>
        </div>   
    )
}
