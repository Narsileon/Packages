import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        email: '',
        password: '',
        last_name: '',
        first_name: '',
    });

    return (
        <>
            <Head title={ t("Register") } />    

            <Form 
                className="w-6/12 m-auto"
                header={ 
                    <FormHeader title={ t("Register") } /> 
                }
                footer={ 
                    <FormFooter 
                        href={ route("home") }
                        label="Register"
                        processing={ processing }
                    />
                }
                submit={ () => post(route('register')) }
            >
                {/* Username */}
                <FormInput 
                    id="username"
                    label="username"
                    value={ data.username } 
                    error={ errors.username } 
                    setData={ setData } 
                />
                {/* Email */}
                <FormInput 
                    id="email"
                    label="email" 
                    type="email"
                    value={ data.email} 
                    error={ errors.email} 
                    setData={ setData } 
                />
                {/* Password */}
                <FormInput 
                    id="password" 
                    label="password" 
                    type="password" 
                    value={ data.password} 
                    error={ errors.password} 
                    setData={ setData } 
                    autoComplete="new-password"
                />
                {/* Last Name */}
                <FormInput 
                    id="last_name"
                    label="last_name"
                    value={ data.last_name } 
                    error={ errors.last_name } 
                    setData={ setData } 
                />
                {/* First Name */}
                <FormInput 
                    id="first_name"
                    label="first_name"  
                    value={ data.first_name } 
                    error={ errors.first_name } 
                    setData={ setData } 
                />
            </Form>
        </>
    );
}
