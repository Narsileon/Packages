import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { useScroll } from "@/narsil-react";
import { Form, FormCheckbox, FormHeader, FormFooter, FormInput, FormSummary, FormSectionHeader } from "@/Components/Forms";

export default function Create({ roles, permissions }) {
	function initializeRoles() {
		let object = {};
	
		roles.data.map((item) => {
			object[item.name] = false;
		});
	
		return object;
	}	

	function initializePermissions() {
		let object = {};
	
		permissions.data.map((item) => {
			object[item.name] = false;
		});
	
		return object;
	}	

	const { data, setData, transform, post, processing, errors } = useForm({
        username: '',
        email: '',
		password: '',
		last_name: '',
		first_name: '',
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

        post('/backoffice/users');
    };

	return (
		<>
			<Head title={ t("Create user") } />

			<div className="flex justify-between space-x-8">
				<FormSummary>
					<button onClick={ scrollTo }>
						{ t("permissions.roles") }
					</button>
					<button onClick={ scrollToPermission }>
						{ t("permissions.permissions") }
					</button>
				</FormSummary>
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
