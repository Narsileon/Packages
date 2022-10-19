import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

	const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

	return (
        <>
            <Head title={ t("Log in") } /> 

            <Form 
                className="w-6/12 m-auto"
                header={ 
                    <FormHeader title={ t("Log in") } /> 
                }
                footer={ 
                    <FormFooter 
                        href={ route("home") }
                        label="Log in"
                        processing={ processing }
                    />
                }
                onSubmit={ submit }
            >
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
                    autoComplete="current-password"
                />
            </Form>
        </>
	);
}