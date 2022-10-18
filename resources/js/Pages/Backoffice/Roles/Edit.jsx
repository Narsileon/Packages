import { Head, useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormCheckbox, FormInput } from "@/Components/Forms";
import { Inertia } from "@inertiajs/inertia";

export default function Edit({ role, permissions }) {
	let object = {};

	permissions.data.map((permission) => {
		object[permission.name] = role.data.permissions.some(x => x.id === permission.id);
	});

	const { data, setData, transform, patch, processing, errors } = useForm({
		name: role.data.name,
		permissions: object,
	});

	const onChange = (event) => {
		let temp = data.permissions;
		temp[event.target.id] = event.target.checked;

		setData('permissions', temp);
    };

	const submit = (e) => {
        e.preventDefault();

		transform(() => ({
			...data,
			permissions: permissions.data.filter(x => data.permissions[x.name] == true)
		}))
		
		patch('/backoffice/roles/' + role.data.id)
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
					permissions.data.map((permission) => {
						return (
							<FormCheckbox
								id={ permission.name } 
								label={ permission.name }
								type="checkbox"  
								checked={ data.permissions[permission.name] } 
								error={ errors[data.permissions[permission.name]] } 
								onChange={ onChange } 
								key={ permission.id }
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
