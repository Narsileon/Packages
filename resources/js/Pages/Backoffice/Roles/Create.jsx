import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Create({ permissions }) {
	let object = {};
	
	permissions.data.map((permission) => {
		object[permission.name] = false;
	});

	const { data, setData, transform, post, processing, errors } = useForm({
		name: "",
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

        post('/backoffice/roles');
    };

	return (
		<>
			<Head title={ t("Create role") } />

			<Form 
				header={ 
					<FormHeader title={ t("Create role") } /> 
				}
				footer={ 
					<FormFooter 
						href={ route("backoffice.roles.index") }
						label="Create"
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
