import { Head, useForm } from "@inertiajs/inertia-react";
import { Form, FormInput, FormFooter } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Create() {
	const { data, setData, post, processing, errors } = useForm({
        username: '',
        email: '',
		password: '',
		last_name: '',
		first_name: '',
    });

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
					setData={ setData } 
				/>
				<FormInput 
					id="email" 
					label="Email" 
					type="email"
					value={ data.email} 
					error={ errors.email} 
					setData={ setData } 
				/>
				<FormInput 
					id="password" 
					label="Password" 
					type="password" 
					value={ data.password} 
					error={ errors.password} 
					setData={ setData } 
				/>
				<FormInput 
					id="last_name" 
					label="Last name" 
					value={ data.last_name } 
					error={ errors.last_name } 
					setData={ setData }  
				/>
				<FormInput 
					id="first_name" 
					label="First name" 
					value={ data.first_name } 
					error={ errors.first_name } 
					setData={ setData } 
				/>

				<FormFooter>
					<PrimaryButton 
						href={ route("backoffice.users.index") }
						type="link"
						label="Back"
					/>
					<PrimaryButton 
						label="Create"
						processing={ processing } 
					/>
				</FormFooter>
			</Form>
		</>
	);
}
