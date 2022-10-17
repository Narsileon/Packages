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

        post('/backoffice/users');
    };

	return (
		<>
			<Head title="Create user" />

			<Form 
				title="Create user"
				onSubmit={ submit }
			>
				<FormInput 
					id="username"
					label="Username"  
					value={ data.username } 
					error={ errors.username } 
					onChange={ onChange } 
				/>
				<FormInput 
					id="email" 
					label="Email" 
					type="email"
					value={ data.email} 
					error={ errors.email} 
					onChange={ onChange } 
				/>
				<FormInput 
					id="password" 
					label="Password" 
					type="password" 
					value={ data.password} 
					error={ errors.password} 
					onChange={ onChange } 
				/>
				<FormInput 
					id="last_name" 
					label="Last name" 
					value={ data.last_name } 
					error={ errors.last_name } 
					onChange={ onChange } 
				/>
				<FormInput 
					id="first_name" 
					label="First name" 
					value={ data.first_name } 
					error={ errors.first_name } 
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
