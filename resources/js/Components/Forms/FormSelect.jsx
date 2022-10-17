import { FormError, FormLabel } from "@/Components/Forms";

export default function FormSelect({
    label, 
    error,
    className, 
    options, 
    ...props 
}) {
    return (
        <div>
            <FormLabel label={ label }/>
            <select
                className={ `field ${className}` }
                required={ true }
                { ...props }
            >            
                {
                    options.map((option, index) => {
                        return (
                            <option 
                                value={ option.id }
                                key={ index }
                            >
                                { option.title }
                            </option>
                        );
                    })
                }   
            </select>  
            <FormError message={ error }/>
        </div>         
    );
}
