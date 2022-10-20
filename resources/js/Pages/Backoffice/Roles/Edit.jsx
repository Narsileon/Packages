import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

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

	const submit = () => {
		transform(() => ({
			...data,
			permissions: permissions.data.filter(x => data.permissions[x.name] == true)
		}))
		
		patch('/backoffice/roles/' + role.data.id)
    };

    return (
        <>
			<Head title={ t("Edit role") } />

			<Form 
				header={ 
					<FormHeader title={ t("Edit role") } /> 
				}
				footer={ 
					<FormFooter 
						href={ route("backoffice.roles.index") }
						label="Update"
						processing={ processing }
					/>
				}
				submit={ submit }
			>
				<FormInput 
					id="name"
					label="name"  
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
            </Form>
        </>
    );
}
