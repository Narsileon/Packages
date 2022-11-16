import { trans } from "@/narsil-localization";
import { Form, FormBody, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
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
            </FormBody>

            <FormFooter>
                <BackButton
                    className="primary-button"
                    href={ route('admin.faqs.index') }
                />
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}