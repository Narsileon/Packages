import { Head, useForm } from "@inertiajs/inertia-react";
import { Form, FormCheckbox, FormInput, FormFooter, FormHeader } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

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
