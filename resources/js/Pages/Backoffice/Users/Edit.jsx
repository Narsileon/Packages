import { Head, useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormInput } from "@/Components/Forms";

export default function Edit({ user }) {
    const { data, setData, patch, processing, errors } = useForm({
        username: user.data.username,
        email: user.data.email,
        last_name: user.data.last_name,
        first_name: user.data.first_name
    });

	const onChange = (event) => {
        setData(event.target.id, event.target.value);
    };

	const submit = (e) => {
        e.preventDefault();

        patch('/backoffice/users/' + user.data.id);
    };

    return (
        <>
            <Head title="Edit user" />

			<Form 
				title="Edit user"
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
					label="Update" 
					processing={ processing } 
				/>
            </Form>
        </>
    );
}
