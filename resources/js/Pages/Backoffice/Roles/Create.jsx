import { Head, useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormInput } from "@/Components/Forms";

export default function Create({ permissions }) {
	let object = {
		name: "",
	}
	
	Object.keys(permissions).map(key => {
		object[key] = true;
	});

	const { data, setData, post, processing, errors } = useForm(object);

	const onChange = (event) => {
        setData(event.target.id, event.target.value);
    };

	const onCheck = (event) => {
		setData(event.target.id, event.target.checked);
	};

	const submit = (e) => {
        e.preventDefault();

        post('/backoffice/roles');
    };

	return (
		<>
			<Head title="Create role" />

			<Form 
				title="Create role"
				onSubmit={ submit }
			>
				<FormInput 
					id="name"
					label="Name"  
					value={ data.name } 
					error={ errors.name } 
					onChange={ onChange } 
				/>

				{
					Object.entries(data).slice(1).map(([key, value], index) => {
						return (
							<FormInput 
								id={ key }
								label={ key }
								type="checkbox"  
								checked={ value } 
								error={ errors[key] } 
								onChange={ onCheck } 
								key={ index }
							/>								
						);
					})
				}

				<FormButton 
					label="Create" 
					processing={ processing } 
				/>
			</Form>
		</>
	);
}
