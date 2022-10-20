import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormCheckbox, FormInput, FormHeader, FormFooter, FormLabel } from "@/Components/Forms";

export default function Create({ roles, permissions }) {
	const { data, setData, transform, post, processing, errors } = useForm({
        username: '',
        email: '',
		password: '',
		last_name: '',
		first_name: '',
		roles: {},
		permissions: {},
    });

	roles.data.map((role) => {
		data.roles[role.name] = false;
	});

	permissions.data.map((permission) => {
		data.permissions[permission.name] = false;
	});

	const onChange = (event, name) => {
		let array = data.permissions;
		array[event.target.id] = event.target.checked;

		setData(name, array);
    };

	const submit = () => {
		transform(() => ({
			...data,
			roles: roles.data.filter(x => data.roles[x.name] == true),
			permissions: permissions.data.filter(x => data.permissions[x.name] == true),
		}))

        post('/backoffice/users');
    };

	return (
		<>
			<Head title={ t("Create user") } />

			<Form 
				header={ 
					<FormHeader title={ t("Create user") } /> 
				}
				footer={ 
					<FormFooter 
						label="Create"
						processing={ processing }
					/>
				}
				submit={ submit }
			>
				<FormInput 
					id="username"
					label="username"  
					value={ data.username } 
					error={ errors.username } 
					setData={ setData } 
				/>
				<FormInput 
					id="email" 
					label="email" 
					type="email"
					value={ data.email} 
					error={ errors.email} 
					setData={ setData } 
				/>
				<FormInput 
					id="password" 
					label="password" 
					type="password" 
					value={ data.password} 
					error={ errors.password} 
					setData={ setData } 
				/>
				<FormInput 
					id="last_name" 
					label="last_name" 
					value={ data.last_name } 
					error={ errors.last_name } 
					setData={ setData }  
				/>
				<FormInput 
					id="first_name" 
					label="first_name" 
					value={ data.first_name } 
					error={ errors.first_name } 
					setData={ setData } 
				/>

				<FormLabel label="Roles" />
				{
					roles.data.map((role) => {
						return (
							<FormCheckbox
								id={ role.name } 
								label={ role.name }
								checked={ data.roles[role.name] } 
								error={ errors[data.roles[role.name]] } 
								onChange={ (e) => onChange(e, "roles") } 
								key={ role.id }
							/>								
						);
					})
				}

				<FormLabel label="Permissions" />
				{
					permissions.data.map((permission) => {
						return (
							<FormCheckbox
								id={ permission.name } 
								label={ permission.name }  
								checked={ data.permissions[permission.name] } 
								error={ errors[data.permissions[permission.name]] } 
								onChange={ (e) => onChange(e, "permissions") } 
								key={ permission.id }
							/>								
						);
					})
				}
			</Form>
		</>
	);
}
