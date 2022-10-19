import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { Form, FormCheckbox, FormInput, FormFooter, FormHeader } from "@/Components/Forms";

export default function Create({ permissions }) {
	let object = {
		name: "",
	}
	
	Object.keys(permissions).map(key => {
		object[key] = true;
	});

	const { data, setData, post, processing, errors } = useForm(object);

	const submit = (e) => {
        e.preventDefault();

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
					Object.entries(data).slice(1).map(([key, value], index) => {
						return (
							<FormCheckbox 
								id={ key }
								label={ key }
								type="checkbox"  
								checked={ value } 
								error={ errors[key] } 
								setData={ setData } 
								key={ index }
							/>								
						);
					})
				}
			</Form>
		</>
	);
}
