import { trans } from "@/narsil-localization";
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
                    label={ trans('validation.attributes.label') }
                    value={ data.label }
                    error={ errors.label }
                    setData={ setData }
                />
                <FormInput
                    id="url"
                    label={ trans('validation.attributes.url') }
                    value={ data.url }
                    error={ errors.url }
                    setData={ setData }
                />
                <FormCheckbox
                    id="active"
                    label={ trans('validation.attributes.active') }
                    checked={ data.active }
                    error={ errors.active }
                    setData={ setData }
                />
            </FormBody>

            <FormFooter>
                <BackButton
                    className="primary-button"
                    href={ route('admin.header_links.index') }
                />
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}
