import { useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormInput } from "@/Components/Forms";

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
        <div className="w-6/12 m-auto">
            <Form 
                title="Log in" 
                onSubmit={ submit }
            >
                <div className="space-y-4">
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
                </div>

                <div className="mt-8">
                    <FormButton 
                        label="Log in" 
                        processing={ processing } 
                    />
                </div>
            </Form>
        </div>	
	);
}