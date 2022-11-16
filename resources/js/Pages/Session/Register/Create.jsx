import { Head, useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        last_name: '',
        first_name: '',
    });

    return (
        <>
            <Head title={ trans('Registration') } />

            <Form
                className="w-9/12 lg:w-6/12 mx-auto"
                header={
                    <FormHeader title={ trans('Registration') } />
                }
                footer={
                    <FormFooter
                        label={ trans('common.register') }
                        processing={ processing }
                    />
                }
                submit={ () => post(route('register')) }
            >
                {/* Username */}
                <FormInput
                    id="username"
                    label={ trans('validation.attributes.username') }
                    value={ data.username }
                    error={ errors.username }
                    setData={ setData }
                />
                {/* Email */}
                <FormInput
                    id="email"
                    label={ trans('validation.attributes.email') }
                    type="email"
                    value={ data.email}
                    error={ errors.email}
                    setData={ setData }
                />
                {/* Password */}
                <FormInput
                    id="password"
                    label={ trans('validation.attributes.password') }
                    type="password"
                    value={ data.password}
                    error={ errors.password}
                    setData={ setData }
                    autoComplete="new-password"
                />
                {/* Password Confirmation */}
                <FormInput
                    id="password_confirmation"
                    label={ trans('validation.attributes.password_confirmation') }
                    type="password"
                    value={ data.password_confirmation}
                    error={ errors.password}
                    setData={ setData }
                    autoComplete="current-password"
                />
                {/* Last Name */}
                <FormInput
                    id="last_name"
                    label={ trans('validation.attributes.last_name') }
                    value={ data.last_name }
                    error={ errors.last_name }
                    setData={ setData }
                />
                {/* First Name */}
                <FormInput
                    id="first_name"
                    label={ trans('validation.attributes.first_name') }
                    value={ data.first_name }
                    error={ errors.first_name }
                    setData={ setData }
                />
            </Form>
        </>
    );
}
