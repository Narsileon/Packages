import { Head, useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { Form, FormBody, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import BackButton from "@/Components/Elements/Buttons/BackButton";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

	return (
        <>
            <Head title={ trans('Connection') } />

            <Form
                className="w-9/12 lg:w-6/12 mx-auto"
                submit={ () => post(route('login')) }
            >
                <FormHeader>
                    <div className="flex justify-center">
                        <h1>
                            { trans('Connection') }
                        </h1>
                    </div>
                </FormHeader>
                <FormBody>
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
                        autoComplete="current-password"
                    />
                </FormBody>

                <FormFooter>
                    <BackButton className="primary-button" />
                    <PrimaryButton
                        label={ trans('common.login') }
                        processing={ processing }
                    />
                </FormFooter>
            </Form>
        </>
	);
}