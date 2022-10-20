import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

	return (
        <>
            <Head title={ t("Log in") } /> 

            <Form 
                className="w-6/12 m-auto"
                header={ 
                    <FormHeader 
                        title={ t("Log in") } 
                    /> 
                }
                footer={ 
                    <FormFooter 
                        label="Log in"
                        processing={ processing }
                    />
                }
                submit={ () => post(route('login')) }
            >
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
                    autoComplete="current-password"
                />
            </Form>
        </>
	);
}