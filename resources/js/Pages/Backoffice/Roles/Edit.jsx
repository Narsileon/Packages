import { useForm } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { Form, FormCheckbox, FormFooter, FormInput } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

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

	const header = (
		<FormHeader title="Create role"/>
	)

	const footer = (
		<FormFooter>
			<PrimaryButton 
				href={ route("backoffice.roles.index") }
				type="link"
				label="Back"
			/>
			<PrimaryButton 
				label="Create"
				processing={ processing } 
			/>
		</FormFooter>
	)

    return (
        <>
			<Head title={ t("Edit role") } />

			<Form 
				header={ header }
				footer={ footer }
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
            </Form>
        </>
    );
}
