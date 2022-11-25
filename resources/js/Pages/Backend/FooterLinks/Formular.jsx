import { trans, transChoice } from "@/narsil-localization";
import { Form, FormBody, FormCheckbox, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Formular({
    title,
    label,
    submit,
    data,
    setData,
    processing,
    errors,
}) {
    return (
        <Form submit={ submit }>
            <FormHeader>
                <div className="flex justify-center">
                    <h1>
                        { title }
                    </h1>
                </div>
            </FormHeader>

            <FormBody>
                <FormInput
                    id="label"
                    label={ transChoice('common.designations', 1) }
                    value={ data.label }
                    error={ errors.label }
                    setData={ setData }
                />
                <FormInput
                    id="url"
                    label={ transChoice('common.urls', 1) }
                    value={ data.url }
                    error={ errors.url }
                    setData={ setData }
                />
                <FormCheckbox
                    id="active"
                    label={ trans('common.active') }
                    checked={ data.active }
                    error={ errors.active }
                    setData={ setData }
                />
            </FormBody>

            <FormFooter>
                <BackButton
                    className="primary-button"
                    href={ route('admin.footer_links.index') }
                />
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}