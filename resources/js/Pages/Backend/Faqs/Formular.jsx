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
                id="question"
                label={ trans('validation.attributes.question') }
                value={ data.question }
                error={ errors.question }
                setData={ setData }
            />
            <FormInput
                id="answer"
                label={ trans('validation.attributes.answer') }
                value={ data.answer }
                error={ errors.answer }
                setData={ setData }
            />
        </Form>
    );
}