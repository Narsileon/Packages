import { useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormInput } from "@/Components/Form/Index";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const onChange = (event) => {
        setData(event.target.id, event.target.value);
    };

	const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

	return (	
        <Form 
            title="Log in" 
            onSubmit={ submit }
        >
            {/* Email */}
            <FormInput 
                id="email" 
                label="Email" 
                type="email"
                value={ data.email} 
                error={ errors.email} 
                onChange={ onChange } 
            />
            {/* Password */}
            <FormInput 
                id="password" 
                label="Password" 
                type="password" 
                value={ data.password} 
                error={ errors.password} 
                onChange={ onChange } 
                autoComplete="current-password"
            />

            <FormButton 
                label="Log in" 
                processing={ processing } 
            />
        </Form>
	);
}