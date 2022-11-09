import { trans } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

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
            header={ <FormHeader title={ title }/> }
            footer={ <FormFooter label={ label } processing={ processing }/> }
            submit={ submit }
        >
            <FormInput
                id="type"
                label={ trans('validation.attributes.type') }
                value={ data.type }
                error={ errors.type }
                setData={ setData }
            />
            <FormInput
                id="status"
                label={ trans('validation.attributes.status') }
                value={ data.status }
                error={ errors.status }
                setData={ setData }
            />
        </Form>
    );
}