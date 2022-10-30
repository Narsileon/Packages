import { Head, useForm } from "@inertiajs/inertia-react";
import { p, t } from "@/narsil-localization";
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

	const submit = () => {
		transform(() => ({
			...data,
			permissions: permissions.data.filter(x => data.permissions[x.name] == true)
		}))

		patch('/backoffice/roles/' + role.data.id)
    };

    return (
        <>
			<Head title={ t('Edit :resource', { 'resource': p('permissions.roles', 1) }) } />

			<Form
				header={
					<FormHeader title={ t('Edit :resource', { 'resource': p('permissions.roles', 1) }) } />
				}
				footer={
					<FormFooter
						label={ t('Update') }
						processing={ processing }
					/>
				}
				submit={ submit }
			>
				<FormInput
					id="name"
					label={ t('validation.attributes.name') }
					value={ data.name }
					error={ errors.name }
					setData={ setData }
				/>

				{
					permissions.data.map((permission) => {
						return (
							<FormCheckbox
								id={ permission.name }
								label={ t(`permissions.${ permission.name }`) }
								type="checkbox"
								checked={ data.permissions[permission.name] }
								error={ errors[data.permissions[permission.name]] }
								onChange={ (e) => setData('permissions', { ...data.permissions, [permission.name]: e.target.checked }) }
								key={ permission.id }
							/>
						);
					})
				}
            </Form>
        </>
    );
}
