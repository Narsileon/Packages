import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormHeader, FormInput } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import AppHead from "@/Shared/AppHead";

export default function Index({ generalSettings }) {
    const { data, setData, patch, processing, transform, errors } = useForm({
        app_name: generalSettings.app_name,
    });

    transform((data) => ({
        ...data,
        id: generalSettings.id
    }))

    const title = upperFirst(transChoice('common.general_settings', 2));

    return(
        <>
			<AppHead title={ title } />

            <Form submit={ () => patch(route('admin.general_settings.update'), generalSettings.id) }>
                <FormHeader>
                    <div className="flex justify-center">
                        <h1>
                            { title }
                        </h1>
                    </div>
                </FormHeader>

                <section id="form-body">
                    <div className="grid grid-cols-1 gap-4">
                        { /* App name */ }
                        <FormInput
                            id="app_name"
                            label={ transChoice('common.names', 1) }
                            value={ data.app_name }
                            error={ errors.app_name }
                            setData={ setData }
                        />
                    </div>
                </section>

                <hr className="border-color" />

                <section id="form-footer">
                    <div className="flex items-center justify-between">
                        <BackButton
                            className="primary-button"
                            href={ route('admin.general_settings.index') }
                        />
                        <PrimaryButton
                            label={ trans('common.update') }
                            processing={ processing }
                        />
                    </div>
                </section>
            </Form>
        </>
    );
}
