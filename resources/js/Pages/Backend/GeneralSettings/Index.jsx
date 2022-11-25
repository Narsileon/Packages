import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { Form, FormBody, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import AppHead from "@/Shared/AppHead";
import { upperFirst } from "lodash";

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

            <Form submit={ () => patch('/admin/general_settings/' + generalSettings.id, generalSettings) }>
                <FormHeader>
                    <div className="flex justify-center">
                        <h1>
                            { title }
                        </h1>
                    </div>
                </FormHeader>

                <FormBody>
                    <FormInput
                        id="app_name"
                        label={ transChoice('common.names', 1) }
                        value={ data.app_name }
                        error={ errors.app_name }
                        setData={ setData }
                    />
                </FormBody>

                <FormFooter>
                    <BackButton
                        className="primary-button"
                        href={ route('admin.general_settings') }
                    />
                    <PrimaryButton
                        label={ trans('common.update') }
                        processing={ processing }
                    />
                </FormFooter>
            </Form>
        </>
    );
}