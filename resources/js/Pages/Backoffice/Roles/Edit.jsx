import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Edit({ role, permissions }) {
	function initializeObject(collection) {
		let object = {};
	
		collection.data.map((item) => {
			object[item.name] = role.data.permissions.some(x => x.id === item.id);
		});
	
		return object;
	}	

	const { data, setData, transform, patch, processing, errors } = useForm({
		name: role.data.name,
		permissions: initializeObject(permissions),
	});

	const onChange = (event) => {
		let array = data.permissions;
		array[event.target.id] = event.target.checked;

		setData('permissions', array);
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
