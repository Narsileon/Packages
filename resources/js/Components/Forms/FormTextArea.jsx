import { FormError, FormLabel } from "@/Components/Forms";

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
