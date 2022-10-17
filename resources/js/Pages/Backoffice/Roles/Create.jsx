import { Head, useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormInput } from "@/Components/Forms";

export default function Create() {
	const { data, setData, post, processing, errors } = useForm({
        username: '',
        email: '',
		password: '',
		last_name: '',
		first_name: '',
    });

	const onChange = (event) => {
        setData(event.target.id, event.target.value);
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

				<FormButton 
					label="Create" 
					processing={ processing } 
				/>
			</Form>
		</>
	);
}
