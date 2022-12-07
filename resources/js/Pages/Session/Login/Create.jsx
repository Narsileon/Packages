import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { Form, FormHeader, FormInput } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import AppHead from "@/Shared/AppHead";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

	return (
        <>
            <AppHead title={ trans('Connection') } />

            <Form
                className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto"
                submit={ () => post(route('login')) }
            >
                <FormHeader>
                    <div className="flex justify-center">
                        <h1>
                            { trans('Connection') }
                        </h1>
                    </div>
                </FormHeader>

                <section id="form-body">
                    <div className="grid grid-cols-1 gap-4">
                        { /* Email */ }
                        <FormInput
                            id="email"
                            label={ transChoice('common.emails', 1) }
                            type="email"
                            value={ data.email}
                            error={ errors.email}
                            setData={ setData }
                        />
                        { /* Password */ }
                        <FormInput
                            id="password"
                            label={ transChoice('common.passwords', 1) }
                            type="password"
                            value={ data.password}
                            error={ errors.password}
                            setData={ setData }
                            autoComplete="current-password"
                        />
                    </div>
                </section>

                <hr className="border-color" />

                <section id="form-footer">
                    <div className="flex items-center justify-between">
                        <BackButton className="primary-button" />
                        <PrimaryButton
                            label={ trans('common.login') }
                            processing={ processing }
                        />
                    </div>
                </section>
            </Form>
        </>
	);
}