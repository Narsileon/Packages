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
            <Head title={ t('Connection') } />

            <Form
                className="w-9/12 lg:w-6/12 mx-auto"
                header={
                    <FormHeader
                        title={ t('Connection') }
                    />
                }
                footer={
                    <FormFooter
                        label={ t('common.login') }
                        processing={ processing }
                    />
                }
                submit={ () => post(route('login')) }
            >
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
                    autoComplete="current-password"
                />
            </Form>
        </>
	);
}