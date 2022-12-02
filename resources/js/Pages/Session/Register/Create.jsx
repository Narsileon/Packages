import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import AppHead from "@/Shared/AppHead";

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
            <AppHead title={ trans('Registration') } />

            <Form
                className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto"
                submit={ () => post(route('register')) }
            >
                <FormHeader>
                    <div className="flex justify-center">
                        <h1>
                            { trans('Registration') }
                        </h1>
                    </div>
                </FormHeader>

                <section id="form-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>
                </section>

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
