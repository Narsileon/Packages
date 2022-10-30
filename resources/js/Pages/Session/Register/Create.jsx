import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
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
            <Head title={ t('Registration') } />

            <Form
                className="w-9/12 lg:w-6/12 mx-auto"
                header={
                    <FormHeader title={ t('Registration') } />
                }
                footer={
                    <FormFooter
                        label={ t('Register') }
                        processing={ processing }
                    />
                }
                submit={ () => post(route('register')) }
            >
                {/* Username */}
                <FormInput
                    id="username"
                    label={ t('validation.attributes.username') }
                    value={ data.username }
                    error={ errors.username }
                    setData={ setData }
                />
                {/* Email */}
                <FormInput
                    id="email"
                    label={ t('validation.attributes.email') }
                    type="email"
                    value={ data.email}
                    error={ errors.email}
                    setData={ setData }
                />
                {/* Password */}
                <FormInput
                    id="password"
                    label={ t('validation.attributes.password') }
                    type="password"
                    value={ data.password}
                    error={ errors.password}
                    setData={ setData }
                    autoComplete="new-password"
                />
                {/* Last Name */}
                <FormInput
                    id="last_name"
                    label={ t('validation.attributes.last_name') }
                    value={ data.last_name }
                    error={ errors.last_name }
                    setData={ setData }
                />
                {/* First Name */}
                <FormInput
                    id="first_name"
                    label={ t('validation.attributes.first_name') }
                    value={ data.first_name }
                    error={ errors.first_name }
                    setData={ setData }
                />
            </Form>
        </>
    );
}
