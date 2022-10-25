import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { useScroll } from "@/narsil-react";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput, FormSectionHeader, FormSummary } from "@/Components/Forms";

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

	const [roleSection, scrollTo] = useScroll();
	const [permissionSection, scrollToPermission] = useScroll();

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
            <Head title={ t('Edit user') } />

			<div className="flex justify-between space-x-8">
				<FormSummary>
					<button onClick={ scrollTo }>
						{ t('permissions.roles') }
					</button>
					<button onClick={ scrollToPermission }>
						{ t('permissions.permissions') }
					</button>
				</FormSummary>
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

					<section ref={ roleSection }>
						<FormSectionHeader title="permissions.roles" />

						{
							roles.data.map((role) => {
								return (
									<FormCheckbox
										id={ role.name } 
										label={ t(`permissions.${ role.name }`) }
										checked={ data.roles[role.name] } 
										error={ errors[data.roles[role.name]] } 
										onChange={ (e) => setData("roles", { ...data.roles, [role.name]: e.target.checked }) } 
										key={ role.id }
									/>								
								);
							})
						}
					</section>

					<section ref={ permissionSection }>
						<FormSectionHeader title="permissions.permissions" />

						{
							permissions.data.map((permission) => {
								return (
									<FormCheckbox
										id={ permission.name } 
										label={ t(`permissions.${ permission.name }`) } 
										checked={ data.permissions[permission.name] } 
										error={ errors[data.permissions[permission.name]] } 
										onChange={ (e) => setData("permissions", { ...data.permissions, [permission.name]: e.target.checked }) } 
										key={ permission.id }
									/>								
								);
							})
						}
					</section>
				</Form>
			</div>
        </>
    );
}
