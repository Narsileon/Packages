import { Head, useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { Form, FormBody, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

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
                submit={ () => post(route('register')) }
            >
                <FormHeader>
                    <div className="flex justify-center">
                        <h1>
                            { trans('Registration') }
                        </h1>
                    </div>
                </FormHeader>

                <FormBody>
                    {/* Username */}
                    <FormInput
                        id="username"
                        label={ transChoice('common.usernames', 1) }
                        value={ data.username }
                        error={ errors.username }
                        setData={ setData }
                    />
                    {/* Email */}
                    <FormInput
                        id="email"
                        label={ transChoice('common.emails', 1) }
                        type="email"
                        value={ data.email}
                        error={ errors.email}
                        setData={ setData }
                    />
                    {/* Password */}
                    <FormInput
                        id="password"
                        label={ transChoice('common.passwords', 1) }
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
                        error={ errors.password_confirmation}
                        setData={ setData }
                        autoComplete="new-password"
                    />
                    {/* Last Name */}
                    <FormInput
                        id="last_name"
                        label={ transChoice('common.last_names', 1) }
                        value={ data.last_name }
                        error={ errors.last_name }
                        setData={ setData }
                    />
                    {/* First Name */}
                    <FormInput
                        id="first_name"
                        label={ transChoice('common.first_names', 1) }
                        value={ data.first_name }
                        error={ errors.first_name }
                        setData={ setData }
                    />
                </FormBody>

                <FormFooter>
                    <BackButton className="primary-button" />
                    <PrimaryButton
                        label={ trans('common.register') }
                        processing={ processing }
                    />
                </FormFooter>
            </Form>
        </>
    );
}
