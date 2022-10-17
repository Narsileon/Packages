import { Head, useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormCheckbox, FormInput } from "@/Components/Forms";

export default function Edit({ role, permissions }) {
	let object = {
		name: role.data.name,
	}
	
	Object.entries(permissions).map(([key, value]) => {
		object[key] = role.data.permissions.some(x => x.name == value) ? true : false;
	});

    const { data, setData, patch, processing, errors } = useForm(object);

	const submit = (e) => {
        e.preventDefault();

        patch('/backoffice/roles/' + role.data.id);
    };

    return (
        <>
            <Head title="Edit role" />

			<Form 
				title="Edit role"
				onSubmit={ submit }
			>
				<FormInput 
					id="name"
					label="Name"  
					value={ data.name } 
					error={ errors.name } 
					setData={ setData } 
				/>

				{
					Object.entries(data).slice(1).map(([key, value], index) => {
						return (
							<FormCheckbox 
								id={ key }
								label={ key }
								type="checkbox"  
								checked={ value } 
								error={ errors[key] } 
								setData={ setData } 
								key={ index }
							/>								
						);
					})
				}

				<FormButton 
					label="Update" 
					processing={ processing } 
				/>
            </Form>
        </>
    );
}
