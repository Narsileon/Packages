import { FormError, FormLabel } from "@/Components/Form/Index";

export default function FormTextArea({ 
    label,
    error,
    className,
    ...props 
}) {
    return (
        <div>
            <FormLabel label={ label }/>
            <textarea 
                className={ `field ${className}` }
                required={ true }
                { ...props }
            /> 
            <FormError message={ error }/>
        </div>   
    );
}
