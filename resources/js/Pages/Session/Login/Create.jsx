import { Head, useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

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
                header={
                    <FormHeader
                        title={ trans('Connection') }
                    />
                }
                footer={
                    <FormFooter
                        label={ trans('common.login') }
                        processing={ processing }
                    />
                }
                submit={ () => post(route('login')) }
            >
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
            </Form>
        </>
	);
}