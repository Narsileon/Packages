import { trans } from "@/narsil-localization";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

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
        <Form
            header={ <FormHeader title={ title } /> }
            footer={ <FormFooter label={ label } processing={ processing } /> }
            submit={ submit }
        >
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
        </Form>
    );
}