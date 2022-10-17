import { FormError, FormLabel } from "@/Components/Forms";

export default function FormInput({ 
    label, 
    error,
    className="", 
    ...props 
}) {
    return (
        <div>
            <FormLabel label={ label }/>
            <input 
                className={ `field ${className}` }
                type="text"
                required={ true }
                { ...props }
            />  
            <FormError message={ error }/>
        </div>   
    )
}
