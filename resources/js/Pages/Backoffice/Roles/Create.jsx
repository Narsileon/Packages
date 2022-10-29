import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Create({ permissions }) {
	function initializeObject(collection) {
		let object = {};

		collection.data.map((item) => {
			object[item.name] = false;
		});

		return object;
	}

	const { data, setData, transform, post, processing, errors } = useForm({
		name: "",
		permissions: initializeObject(permissions),
	});

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
						label="Create"
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
								label={ `permissions.${ permission.name }` }
								type="checkbox"
								checked={ data.permissions[permission.name] }
								error={ errors[data.permissions[permission.name]] }
								onChange={ (e) => setData("permissions", { ...data.permissions, [permission.name]: e.target.checked }) }
								key={ permission.id }
							/>
						);
					})
				}
			</Form>
		</>
	);
}
