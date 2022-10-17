import { useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormInput } from "@/Components/Forms";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        email: '',
        password: '',
        last_name: '',
        first_name: '',
    });

	const submit = (event) => {
        event.preventDefault();

        post(route('register'));
    };

    return (
        <div className="w-6/12 m-auto">
            <Form 
                className="space-y-4"
                title="Register" 
                onSubmit={ submit }
            >
                {/* Username */}
                <FormInput 
                    id="username"
                    label="Username"
                    value={ data.username } 
                    error={ errors.username } 
                    setData={ setData } 
                />
                {/* Email */}
                <FormInput 
                    id="email"
                    label="Email" 
                    type="email"
                    value={ data.email} 
                    error={ errors.email} 
                    setData={ setData } 
                />
                {/* Password */}
                <FormInput 
                    id="password" 
                    label="Password" 
                    type="password" 
                    value={ data.password} 
                    error={ errors.password} 
                    setData={ setData } 
                    autoComplete="new-password"
                />
                {/* Last Name */}
                <FormInput 
                    id="last_name"
                    label="Last name"
                    value={ data.last_name } 
                    error={ errors.last_name } 
                    setData={ setData } 
                />
                {/* First Name */}
                <FormInput 
                    id="first_name"
                    label="First name"  
                    value={ data.first_name } 
                    error={ errors.first_name } 
                    setData={ setData } 
                />

                <FormButton 
                    label="Register" 
                    processing={ processing } 
                />
            </Form>
        </div>
    );
}
