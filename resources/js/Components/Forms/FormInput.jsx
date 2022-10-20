import { FormError, FormLabel } from "@/Components/Forms";

export default function FormInput({ 
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
            <input 
                className={ `field w-full ${ className }` }
                type="text"
                onChange={ onChange }
                required={ true }
                { ...props }
            />  
            <FormError message={ error } />
        </div>   
    )
}
