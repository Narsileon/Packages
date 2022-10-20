import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormCheckbox, FormHeader, FormFooter, FormInput, FormLabel } from "@/Components/Forms";

export default function Edit({ user, roles, permissions }) {
	function initializeRoles() {
		let object = {};
	
		roles.data.map((item) => {
			object[item.name] = user.data.roles.some(x => x.id === item.id);
		});
	
		return object;
	}	

	function initializePermissions() {
		let object = {};
	
		permissions.data.map((item) => {
			object[item.name] = user.data.permissions.some(x => x.id === item.id);
		});
	
		return object;
	}	

    const { data, setData, transform, patch, processing, errors } = useForm({
        username: user.data.username,
        email: user.data.email,
        last_name: user.data.last_name,
        first_name: user.data.first_name,
		roles: initializeRoles(),
		permissions: initializePermissions(),
    });

	const onRoleChange = (event) => {
		let array = data.roles;
		array[event.target.id] = event.target.checked;

		setData("roles", array);
    };

	const onPermissionChange = (event) => {
		let array = data.permissions;
		array[event.target.id] = event.target.checked;

		setData("permissions", array);
    };

	const submit = () => {
		transform(() => ({
			...data,
			roles: roles.data.filter(x => data.roles[x.name] == true),
			permissions: permissions.data.filter(x => data.permissions[x.name] == true),
		}))

        patch('/backoffice/users/' + user.data.id);
    };

    return (
        <>
			<Head title={ t("Edit user") } />

			<Form 
				header={ 
					<FormHeader title={ t("Edit user") } /> 
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
								onChange={ onRoleChange } 
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
								onChange={ onPermissionChange } 
								key={ permission.id }
							/>								
						);
					})
				}
            </Form>
        </>
    );
}
